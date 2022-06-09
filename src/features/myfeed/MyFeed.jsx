import React, { useState } from 'react';
import {
  Navbar,
  BottomBar,
  PostContainer,
  Sidebar,
  ActivityBar,
} from 'components';
import { CreatePostModal } from 'features';

const MyFeed = () => {
  const [isOpenPostModal, setIsOpenPostModal] = useState(false);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[80px_1fr_350px] lg:m-auto">
      <Sidebar setIsOpenPostModal={setIsOpenPostModal} />
      <div className="sm:col-start-2 border-r border-[#EFEFEF]">
        <Navbar />
        <BottomBar setIsOpenPostModal={setIsOpenPostModal} />
        <PostContainer setIsOpenPostModal={setIsOpenPostModal} />
      </div>
      <ActivityBar setIsOpenPostModal={setIsOpenPostModal} />
      {isOpenPostModal ? (
        <CreatePostModal setIsOpenPostModal={setIsOpenPostModal} />
      ) : null}
    </div>
  );
};

export { MyFeed };
