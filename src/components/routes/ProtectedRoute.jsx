import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isLogedIn = true;
  const location = useLocation();
  return isLogedIn ? (
    children
  ) : (
    <Navigate to="/login" replace state={location.pathname} />
  );
};

export { ProtectedRoute };
