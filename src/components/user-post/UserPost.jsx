import React from 'react';
import PropTypes from 'prop-types';

const UserPost = ({ avatar, img }) => {
  return (
    <div className="grid gap-2 break-inside-avoid mb-10">
      <section className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
            <img
              src={avatar}
              alt="avatar"
              className="min-w-full rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">Jenny Wilson</h3>
            <p className="text-xs sm:text-sm">Allenton, New Mexico</p>
          </div>
        </div>
        <div>
          <span className="material-icons-outlined">more_horiz</span>
        </div>
      </section>
      <section className="text-sm sm:text-base">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          molestias vel placeat pariatur ratione consequatur rerum fugiat
          inventore eius modi?
        </p>
      </section>
      <section className="relative rounded-xl shadow-[2.1px_3.1px_7px_rgba(0,0,0,0.055),5px_10px_30px_rgba(0,0,0,0.012)]">
        <div className="rounded-xl">
          <img
            src={img}
            alt="post"
            className="min-w-full rounded-xl object-cover lg:aspect-video"
          />
        </div>
        <div className="absolute w-full bg-white bottom-0 left-0 rounded-tl-[2rem] rounded-b-xl">
          <div className="flex items-center justify-between w-11/12 m-auto py-2.5 sm:p-3 text-gray-600">
            <section className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-1">
                <span className="material-icons-outlined text-lg">
                  favorite_border
                </span>
                <p className="text-[0.625rem] sm:text-sm">10K</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons-outlined text-lg">chat</span>
                <p className="text-[0.625rem] sm:text-sm">4K</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons-outlined text-lg">
                  ios_share
                </span>
                <p className="text-[0.625rem] sm:text-sm">7K</p>
              </div>
            </section>
            <section>
              <span className="material-icons-outlined text-lg">
                bookmark_border
              </span>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

UserPost.propTypes = {
  avatar: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export { UserPost };
