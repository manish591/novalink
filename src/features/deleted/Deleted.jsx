import React from 'react';
import { posts } from 'common/data';
import { Sidebar } from 'components';

const DeletedPost = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[250px_1fr_300px] gap-4">
      <Sidebar />
      <section className="sm:col-start-2">
        <div className="w-full flex items-center justify-between px-2 py-2 sm:py-4 bg-[white] sticky top-0">
          <div className="flex items-center gap-4">
            <span className="material-icons-outlined">west</span>
            <h1 className="font-semibold text-xl">Recently Deleted</h1>
          </div>
        </div>
        <section>
          <div className="grid grid-cols-3 lg:grid-cols-4 m-auto gap-1 mt-4 sm:gap-8">
            {posts.map((item) => {
              return (
                <article key={item.id}>
                  <img
                    src={item.img}
                    alt="profile"
                    className="min-w-full object-cover aspect-square"
                  />
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export { DeletedPost };
