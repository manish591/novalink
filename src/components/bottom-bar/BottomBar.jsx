import React from 'react';

const BottomBar = () => {
  return (
    <div className="fixed w-full bg-gray-100 bottom-0 right-0 border-t z-[10] sm:hidden">
      <div className="w-11/12 m-auto py-1 px-2">
        <ul className="flex items-center justify-between">
          <li className="p-1">
            <div className="flex flex-col text-center">
              <span className="material-icons-outlined">home</span>
              <p className="text-[0.625rem]">Home</p>
            </div>
          </li>
          <li className="p-1">
            <div className="flex flex-col text-center">
              <span className="material-icons-outlined">search</span>
              <p className="text-[0.625rem]">Search</p>
            </div>
          </li>
          <li className="w-12 h-12 rounded-full bg-cyan-500 border relative">
            <div className="flex w-full h-full items-center justify-center">
              <span className="material-icons-outlined text-white">add</span>
            </div>
          </li>
          <li className="p-1">
            <div className="flex flex-col text-center">
              <span className="material-icons-outlined">favorite_border</span>
              <p className="text-[0.625rem]">Activity</p>
            </div>
          </li>
          <li className="p-1">
            <div className="flex flex-col text-center">
              <span className="material-icons-outlined">person</span>
              <p className="text-[0.625rem]">Profile</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { BottomBar };
