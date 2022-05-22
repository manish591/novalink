import React from 'react';
import { UserPost } from 'components';
import { posts } from 'common/data';

const PostContainer = () => {
  return (
    <div className="w-11/12 m-auto py-4">
      <div className="mb-20 gap-8 3xl:grid-cols-2 3xl:gap-12 columns-1 sm:columns-2 lg:gap-10 3xl:columns-4">
        {posts.map((item) => {
          return <UserPost key={item.id} avatar={item.avatar} img={item.img} />;
        })}
      </div>
    </div>
  );
};

export { PostContainer };
