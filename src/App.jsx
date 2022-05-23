import React, { useEffect } from 'react';
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
  getAllUsersData,
  getPosts,
  Explore,
} from 'features';
import { RedirectedRoute, ProtectedRoute } from 'components';
import Mockman from 'mockman-js';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersData());
    dispatch(getPosts());
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* Mockman route */}
        <Route path="/mockman" element={<Mockman />} />
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
          path="/profile/:username"
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
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
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
