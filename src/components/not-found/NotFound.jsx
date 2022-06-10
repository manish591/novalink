import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex items-center justify-center w-11/12 m-auto">
      <div>
        <h1 className="text-5xl font-bold">I Have a bad news for you</h1>
        <p className="text-xl my-4">
          The page you are looking for might be removed or temorarily
          unavailable
        </p>
        <button
          type="button"
          className="py-3 px-5 bg-[black] text-white rounded-md"
          onClick={() => {
            navigate('/feed');
          }}>
          Back To Home
        </button>
      </div>
    </div>
  );
};

export { NotFound };
