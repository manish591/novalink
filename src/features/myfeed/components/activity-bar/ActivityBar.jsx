import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { LatestPost } from '../others/latest-post/LatestPost';
import { Suggestions } from '../others/suggestions/Suggestions';

const ActivityBar = ({ setIsOpenPostModal }) => {
  const currentUser = useSelector((state) => state.authentication.currentUser);

  return (
    <div className="hidden bg-[#FFFFFF] sticky lg:block fixed h-[100vh] top-0 w-[350px] lg:py-2">
      <div className="py-2 px-4 grid gap-8 h-full grid-rows-[1fr_auto]">
        <section>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full">
              <img
                src={
                  currentUser.avatarUrl
                    ? currentUser.avatarUrl
                    : 'https://i.pravatar.cc/150?img=50'
                }
                alt="avatar"
                className="min-w-full rounded-full"
              />
            </div>
            <div>
              <p>{currentUser.name}</p>
              <p className="text-gray-400 leading-[1.1]">
                {currentUser.username}
              </p>
            </div>
          </div>
          <Suggestions />
        </section>
        <section className="items-end">
          <LatestPost />
          <section className="mt-4">
            <button
              type="button"
              onClick={() => {
                setIsOpenPostModal((prev) => !prev);
              }}
              className="w-full py-3 bg-gradient-to-r from-[#f12711] to-[#f5af19] text-[white] items-end rounded-md shadow-md">
              Create Post
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

ActivityBar.propTypes = {
  setIsOpenPostModal: PropTypes.func.isRequired,
};

export { ActivityBar };
