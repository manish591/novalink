import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SearchResults = ({ usersFound, setQuery }) => {
  const compRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isClickedOutside = (e) => {
      if (compRef && !compRef.current.contains(e.target)) {
        setQuery('');
      }
    };

    document.addEventListener('mouseup', isClickedOutside);

    return () => {
      document.removeEventListener('mouseup', isClickedOutside);
    };
  }, [compRef]);

  return (
    <div
      className="absolute top-[110%] w-full left-[0] bg-white drop-shadow-xl py-2"
      ref={compRef}>
      <h1 className="px-2">Serach results</h1>
      {usersFound.length < 1 && (
        <div className="h-[100px] flex justify-center items-center">
          <h1>No users found!</h1>
        </div>
      )}
      <div className="mt-2">
        {usersFound.map((user) => {
          return (
            <button
              type="button"
              onClick={() => {
                navigate(`/profile/${user.username}`);
              }}
              key={user._id}
              className="flex px-2 py-2 w-full items-center rounded-md hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-4">
                <img
                  src={user.avatarUrl}
                  alt="person"
                  className="w-[45px] h-[45px] object-cover rounded-full"
                />
                <div className="text-left">
                  <p className="font-bold text-sm">@{user.username}</p>
                  <p className="text-sm text-left">{user.name}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  usersFound: propTypes.array.isRequired,
  setQuery: propTypes.func.isRequired,
};

export { SearchResults };
