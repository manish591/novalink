import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isUserLoggedIn = useSelector(
    (state) => state.authentication.isUserLoggedIn,
  );

  return isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/" replace state={location.pathname} />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ProtectedRoute };
