import React from 'react';
import { posts } from 'common/data';
import { ActivityBar, BottomBar, Navbar, Sidebar } from 'components';

const Explore = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[250px_1fr_300px] lg:m-auto">
      <Sidebar />
      <div className="sm:col-start-2 border-r">
        <div className="hidden sm:block sticky top-0">
          <Navbar />
        </div>
        <section className="py-2 border sm:hidden">
          <form className="w-11/12 m-auto">
            <section className="flex gap-1 border rounded-md">
              <label
                htmlFor="search"
                className="flex items-center justify-center">
                <span className="material-icons-outlined">search</span>
              </label>
              <input
                type="text"
                id="search"
                className="w-full py-2 outline-none px-2 rounded-md"
                placeholder="Search Here..."
              />
            </section>
          </form>
        </section>
        <section className="mt-4 mb-16 w-11/12 m-auto">
          <div className="columns-2 gap-2 lg:columns-3">
            {posts.map((item) => {
              return (
                <article key={item.id} className="pb-2">
                  <img
                    src={item.img}
                    alt="profile"
                    className="min-w-full object-cover aspect-square rounded-md"
                  />
                </article>
              );
            })}
          </div>
        </section>
      </div>
      <ActivityBar />
      <BottomBar />
    </div>
  );
};

export { Explore };
