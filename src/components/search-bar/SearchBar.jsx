import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchResults } from './SearchResults';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showSearchResultsModal, setShowSerchResultsModal] = useState(false);
  const users = useSelector((state) => state.users.usersData);
  const usersFound = users.filter(
    (user) => query !== '' && user.username.includes(query),
  );

  const handleSearchUsers = (e) => {
    e.preventDefault();
    if (query !== '') {
      setShowSerchResultsModal((prev) => !prev);
    }
  };

  return (
    <div className="relative">
      <form className="hidden sm:block" onSubmit={handleSearchUsers}>
        <section className="border border-[#EFEFEF] bg-[#EFEFEF] py-2.5 px-2 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined">search</span>
            <input
              type="text"
              className="bg-transparent outline-none lg:w-[300px]"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </section>
      </form>
      {showSearchResultsModal && (
        <SearchResults
          usersFound={usersFound}
          setShowSerchResultsModal={setShowSerchResultsModal}
        />
      )}
    </div>
  );
};

export { SearchBar };
