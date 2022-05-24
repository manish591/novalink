import React from 'react';
import { Link } from 'react-router-dom';

const UserNotFound = () => {
  return (
    <div className="h-[100vh] w-11/12 m-auto flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold">
          <span className="border-r pr-2">404</span> User not found
        </h1>
        <p className="mt-2 text-gray-500">
          Please check the username and try again later
        </p>
        <section className="mt-3 flex items-center gap-2">
          <Link to="/feed">
            <button
              type="button"
              className="border py-2 px-3 rounded-md bg-[lightblue]">
              Go Back Home
            </button>
          </Link>
          <button type="button" className="border py-2 px-3 rounded-md">
            Contact Support
          </button>
        </section>
      </div>
    </div>
  );
};

export { UserNotFound };
