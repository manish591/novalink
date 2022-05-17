import React from 'react';

const SearchBar = () => {
  return (
    <form className="hidden sm:block">
      <section className="bg-gray-100 py-2.5 px-2 rounded-lg">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="flex items-center gap-2">
          <span className="material-icons-outlined">search</span>
          <input
            type="text"
            className="bg-transparent outline-none lg:w-[300px]"
            id="search"
          />
        </div>
      </section>
    </form>
  );
};

export { SearchBar };
