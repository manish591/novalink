import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const currentUser = useSelector((state) => state.authentication.currentUser);
  return (
    <div className="hidden sm:block fixed h-[100vh] w-[80px] bg-gray-50 lg:w-[250px]">
      <div className="flex lg:block h-full items-center justify-center">
        <div className="grid gap-10 lg:gap-4 w-full">
          <div className="lg:px-6 lg:py-4 hidden lg:block">
            <Link
              to="/feed"
              className="text-2xl sm:text-3xl font-['Pacifico'] cursor-pointer">
              novalink
            </Link>
          </div>
          <Link
            to="/feed"
            className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start cursor-pointer">
            <span className="material-icons-outlined text-3xl lg:text-[1.6rem]">
              home
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Home
            </p>
          </Link>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start cursor-pointer">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              search
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Search
            </p>
          </section>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start cursor-pointer">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              favorite_border
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Activity
            </p>
          </section>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start cursor-pointer">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              chat
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Messages
            </p>
          </section>
          <Link
            to={`/profile/${currentUser?.username}`}
            className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start cursor-pointer">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              person
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Profile
            </p>
          </Link>
          <Link
            to="/bookmark"
            className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start cursor-pointer">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              bookmark_border
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Saved
            </p>
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start cursor-pointer">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              settings
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Settings
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
