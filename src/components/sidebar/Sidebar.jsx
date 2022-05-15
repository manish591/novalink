import React from 'react';

const Sidebar = () => {
  return (
    <div className="hidden sm:block fixed h-[100vh] w-[80px] bg-gray-50 lg:w-[250px]">
      <div className="flex lg:block h-full items-center justify-center">
        <div className="grid gap-10 lg:gap-4 w-full">
          <div className="lg:px-6 lg:py-4 hidden lg:block">
            <h1 className="text-2xl sm:text-3xl font-['Pacifico']">novalink</h1>
          </div>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start">
            <span className="material-icons-outlined text-3xl lg:text-[1.6rem]">
              home
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Home
            </p>
          </section>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              search
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Search
            </p>
          </section>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              favorite_border
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Liked
            </p>
          </section>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              chat
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Messages
            </p>
          </section>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              person
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Profile
            </p>
          </section>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              bookmark_border
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Saved
            </p>
          </section>
          <section className="flex items-center gap-3 lg:px-6 lg:py-2 hover:bg-gray-200 w-full justify-center lg:justify-start">
            <span className="material-icons-outlined text-3xl lg:text-2xl">
              settings
            </span>
            <p className="hidden lg:block font-medium text-gray-800 text-base">
              Settings
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
