import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, UserPost } from 'components';
import { API_STATE } from 'common';

const PostContainer = () => {
  const userFeedPosts = useSelector((state) => state.post.postData);
  const userPostsStatus = useSelector((state) => state.post.postStatus);

  return (
    <div className="w-11/12 m-auto py-4">
      {userPostsStatus === API_STATE.LOADING && <Loader />}
      {userPostsStatus === API_STATE.SUCCESS && (
        <div className="mb-20 gap-8 3xl:grid-cols-2 3xl:gap-12 columns-1 sm:columns-2 lg:gap-10 3xl:columns-4">
          {userFeedPosts.map((item) => {
            return (
              <UserPost
                key={item._id}
                id={item._id}
                mediaURL={item.mediaURL}
                username={item.username}
                content={item.content}
                likes={item.likes}
                comments={item.comments}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export { PostContainer };
