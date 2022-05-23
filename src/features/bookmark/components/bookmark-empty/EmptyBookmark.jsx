import React from 'react';
import { Link } from 'react-router-dom';

const EmptyBookmark = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Your Bookmarks Is Empty</h1>
        <Link to="/feed" className="border py-2 px-4 mt-4 inline-block">
          Explore Posts
        </Link>
      </div>
    </div>
  );
};

export { EmptyBookmark };
