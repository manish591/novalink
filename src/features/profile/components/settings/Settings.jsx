import React from 'react';
import { logoutUser } from 'features';
import { useDispatch } from 'react-redux';

const Settings = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Settings page</h1>
      <button
        type="button"
        className="border py-1 px-3"
        onClick={() => {
          dispatch(logoutUser());
        }}>
        Logout
      </button>
    </div>
  );
};

export { Settings };
