import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'features/posts/postsSlice';
import { UserPost } from 'components';

const PostContainer = () => {
  const userFeedPosts = useSelector((state) => state.post.postData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="w-11/12 m-auto py-4">
      <div className="mb-20 gap-8 3xl:grid-cols-2 3xl:gap-12 columns-1 sm:columns-2 lg:gap-10 3xl:columns-4">
        {userFeedPosts.map((item) => {
          return (
            <UserPost
              key={item._id}
              mediaURL={item.mediaURL}
              username={item.username}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export { PostContainer };
