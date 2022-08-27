import React from 'react';
import { SearchBar } from 'components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-2 lg:py-4 bg-[#FFFFFF] border-b border-[#EFEFEF] z-[10] shadow-sm">
      <section className="flex justify-between items-center w-[94%] m-auto">
        <div>
          <Link to="/feed" className="text-2xl sm:text-3xl font-['Pacifico']">
            novalink
          </Link>
        </div>
        <div className="flex gap-3 lg:gap-5 items-center ml-auto hidden sm:block">
          <SearchBar />
        </div>
      </section>
    </nav>
  );
};

export { Navbar };
