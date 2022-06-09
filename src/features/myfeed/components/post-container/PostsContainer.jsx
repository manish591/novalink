import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, UserPost } from 'components';
import { API_STATE } from 'common';
import PropTypes from 'prop-types';

const PostContainer = ({ setIsOpenPostModal }) => {
  const userFeedPosts = useSelector((state) => state.post.postData);
  const userPostsStatus = useSelector((state) => state.post.postStatus);

  return (
    <div className="w-[95%] m-auto py-4 mt-4">
      {userPostsStatus === API_STATE.LOADING && <Loader />}
      {userPostsStatus === API_STATE.SUCCESS && (
        <div className="mb-20 gap-7 3xl:grid-cols-2 3xl:gap-12 columns-1 sm:columns-2 lg:columns-3 3xl:columns-4">
          {userFeedPosts.map((item) => {
            return (
              <UserPost
                key={item._id}
                post={item}
                setIsOpenPostModal={setIsOpenPostModal}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

PostContainer.propTypes = {
  setIsOpenPostModal: PropTypes.func.isRequired,
};

export { PostContainer };
