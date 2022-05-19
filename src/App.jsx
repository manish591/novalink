import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  MyFeed,
  LandingPage,
  Archive,
  Bookmark,
  DeletedPost,
  MyProfile,
  Settings,
  Login,
  Signup,
} from 'features';
import { RedirectedRoute, ProtectedRoute } from 'components';
import { usePersistAuth } from 'common';

const App = () => {
  usePersistAuth();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RedirectedRoute>
              <LandingPage />
            </RedirectedRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <MyFeed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/archive"
          element={
            <ProtectedRoute>
              <Archive />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookmark"
          element={
            <ProtectedRoute>
              <Bookmark />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deleted"
          element={
            <ProtectedRoute>
              <DeletedPost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
