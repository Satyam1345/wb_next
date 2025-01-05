import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const BASE_URL = process.env.BASE_URL ;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  const decodeToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } catch (error) {
      console.error('Invalid token format:', error.message);
      return null;
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/token/refresh/`, {
        refresh: refreshToken,
      });
  
      const newAccessToken = response.data.access;
      if (newAccessToken) {
        localStorage.setItem('accessToken', newAccessToken);
        setAccessToken(newAccessToken);
        console.log('Access token refreshed successfully');
      } else {
        throw new Error('No access token returned from API');
      }
    } catch (error) {
      console.error('Failed to refresh token:', error.response?.data || error.message);
      if (error.response?.status === 401) {
        console.warn('Refresh token is invalid or expired');
      }
      logout();
    }
  };
  

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAccessToken(null);
    setRefreshToken(null);
    // window.location.href = "/login";
  };

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (accessToken) {
        const decoded = decodeToken(accessToken);
        if (decoded?.exp) {
          const expirationTime = decoded.exp * 1000;
          const timeLeft = expirationTime - Date.now();
          // const timeLeft = 50000;
          if (timeLeft < 60000) {
            console.log("triggering refresh access token function")
            refreshAccessToken();
          }
        } else {
          console.error('Invalid access token');
          logout();
        }
      }
    };

    const interval = setInterval(checkTokenExpiration, 30000);
    // checkTokenExpiration(); // Check once immediately

    return () => clearInterval(interval);
  }, [accessToken, refreshToken]);

  const login = (access, refresh) => {
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    setAccessToken(access);
    setRefreshToken(refresh);
    console.log('User logged in successfully');
  };

  return (
    <AuthContext.Provider value={{ accessToken, refreshAccessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
