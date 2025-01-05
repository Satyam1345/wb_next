import { User } from '../models'; // Import your user model

export const authenticate = async (req, res, next) => {
  try {
    const accessToken = req.headers['authorization']?.split(' ')[1];
    if (!accessToken) {
      return res.status(401).json({ message: 'Access token missing' });
    }

    // Validate access token with the database
    const user = await User.findOne({ accessToken }); // Adjust based on your schema
    if (!user) {
      return res.status(401).json({ message: 'Invalid or expired access token' });
    }

    req.user = user; // Attach user info to request
    next();
  } catch (error) {
    console.error('Authentication error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
