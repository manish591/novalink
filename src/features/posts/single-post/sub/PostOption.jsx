import React from 'react';

const PostOptions = () => {
  return (
    <div className="absolute w-full bg-white bottom-0 left-0 rounded-tl-[2rem] rounded-b-xl">
      <div className="flex w-11/12 m-auto items-center justify-between py-3 sm:p-3 text-gray-600">
        <section className="flex items-center justify-between gap-4 sm:gap-4">
          <div className="flex items-center gap-1">
            <button type="button">
              <span className="material-icons-outlined text-2xl">favorite</span>
            </button>
            <p className="text-base sm:text-sm">10</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-2xl">
              chat_bubble_outline
            </span>
            <p className="text-base sm:text-sm">0</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons-outlined text-2xl">ios_share</span>
            <p className="text-base sm:text-sm">7K</p>
          </div>
        </section>
        <section>
          <button type="button">
            <span className="material-icons-outlined text-2xl">
              bookmark_border
            </span>
          </button>
        </section>
      </div>
    </div>
  );
};

export { PostOptions };
