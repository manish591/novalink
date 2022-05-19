import React from 'react';
import { SearchBar } from 'components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-2 lg:py-3 text-[#2F394D] bg-white z-[10]">
      <section className="flex justify-between items-center w-11/12 m-auto">
        <div className="lg:hidden">
          <Link to="/feed" className="text-2xl sm:text-3xl font-['Pacifico']">
            novalink
          </Link>
        </div>
        <div className="flex gap-3 lg:gap-5 items-center lg:w-full">
          <SearchBar />
          <section className="flex items-center justify-center ml-auto">
            <span className="material-symbols-rounded text-2xl">
              notifications
            </span>
          </section>
          <section className="flex items-center justify-center translate-y-0.5">
            <span className="material-symbols-rounded text-xl">chat</span>
          </section>
        </div>
      </section>
    </nav>
  );
};

export { Navbar };
