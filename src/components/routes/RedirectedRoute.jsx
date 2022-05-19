import React from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const RedirectedRoute = ({ children }) => {
  const isLogedIn = true;
  return isLogedIn ? <Navigate to="/feed" /> : children;
};

export { RedirectedRoute };
