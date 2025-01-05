import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ;

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/token/refresh/`, {
      refresh: refreshToken,
    });

    return response.data; 
  } catch (error) {
    throw new Error('Failed to refresh access token');
  }
};

export async function POST(req) {
  const { refreshToken } = await req.json();

  if (!refreshToken) {
    return NextResponse.json({ message: 'Refresh token is required, currently not available' }, { status: 400 });
  }

  try {
    const newTokens = await refreshAccessToken(refreshToken);
    return NextResponse.json(newTokens);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
