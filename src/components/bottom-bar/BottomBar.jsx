import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const BottomBar = ({ setIsOpenPostModal }) => {
  const currentUser = useSelector((state) => state.authentication.currentUser);
  return (
    <div className="fixed w-full bg-gray-100 bottom-0 right-0 border-t z-[10] sm:hidden">
      <div className="w-11/12 m-auto py-1 px-2">
        <ul className="flex items-center justify-between">
          <li className="p-1">
            <Link to="/feed" className="flex flex-col text-center">
              <span className="material-icons-outlined">home</span>
              <p className="text-[0.625rem]">Home</p>
            </Link>
          </li>
          <li className="p-1">
            <Link
              to="/explore"
              className="flex flex-col text-center inline-block">
              <span className="material-icons-outlined">search</span>
              <p className="text-[0.625rem]">Search</p>
            </Link>
          </li>
          <li className="w-12 h-12 rounded-full bg-cyan-500 border relative">
            <button
              type="button"
              className="flex w-full h-full items-center justify-center"
              onClick={() => {
                setIsOpenPostModal((prev) => !prev);
              }}>
              <span className="material-icons-outlined text-white">add</span>
            </button>
          </li>
          <li className="p-1">
            <div className="flex flex-col text-center">
              <span className="material-icons-outlined">favorite_border</span>
              <p className="text-[0.625rem]">Activity</p>
            </div>
          </li>
          <li className="p-1">
            <Link
              to={`/profile/${currentUser.username}`}
              className="flex flex-col text-center">
              <span className="material-icons-outlined">person</span>
              <p className="text-[0.625rem]">Profile</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

BottomBar.propTypes = {
  setIsOpenPostModal: PropTypes.func.isRequired,
};

export { BottomBar };
