import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchResults } from './SearchResults';
import { useDebounce } from './hooks/useDebounce';

const getUserList = (arr, query) => {
  if (!query) return [];
  return arr.filter((user) =>
    user.username.toLowerCase().includes(query.toLowerCase()),
  );
};

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [predictions, setPredictions] = useState([]);
  const users = useSelector((state) => state.users.usersData);

  const debouncedFunction = useDebounce((q) => {
    const userData = getUserList(users, q);
    setPredictions(userData);
  }, 300);

  const handleSearchUsers = (e) => {
    setQuery(e.target.value);
    debouncedFunction(e.target.value);
  };

  return (
    <div className="relative">
      <form className="block">
        <section className="border border-[#EFEFEF] bg-[#EFEFEF] py-2.5 px-2 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined">search</span>
            <input
              type="text"
              className="bg-transparent outline-none lg:w-[300px]"
              value={query}
              onChange={handleSearchUsers}
            />
          </div>
        </section>
      </form>
      {predictions.length ? (
        <SearchResults usersFound={predictions} setQuery={setQuery} />
      ) : null}
    </div>
  );
};

export { SearchBar };
