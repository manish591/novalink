import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RedirectedRoute = ({ children }) => {
  const isUserLoggedIn = useSelector(
    (state) => state.authentication.isUserLoggedIn,
  );
  return isUserLoggedIn ? <Navigate to="/feed" /> : children;
};

RedirectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export { RedirectedRoute };
