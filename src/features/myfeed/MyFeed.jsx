import React, { useState } from 'react';
import {
  Navbar,
  Stories,
  BottomBar,
  PostContainer,
  Sidebar,
  ActivityBar,
} from 'components';
import { CreatePostModal } from 'features';

const MyFeed = () => {
  const [isOpenPostModal, setIsOpenPostModal] = useState(false);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[250px_1fr_300px] lg:m-auto">
      <Sidebar setIsOpenPostModal={setIsOpenPostModal} />
      <div className="sm:col-start-2 border-r">
        <Navbar />
        <Stories />
        <BottomBar setIsOpenPostModal={setIsOpenPostModal} />
        <PostContainer />
      </div>
      <ActivityBar setIsOpenPostModal={setIsOpenPostModal} />
      {isOpenPostModal ? (
        <CreatePostModal setIsOpenPostModal={setIsOpenPostModal} />
      ) : null}
    </div>
  );
};

export { MyFeed };
