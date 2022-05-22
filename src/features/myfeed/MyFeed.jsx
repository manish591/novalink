import React, { useEffect } from 'react';
import {
  Navbar,
  Stories,
  BottomBar,
  PostContainer,
  Sidebar,
  ActivityBar,
} from 'components';
import { useDispatch } from 'react-redux';
import { getAllUsersData } from 'features';

const MyFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersData());
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[250px_1fr_300px] lg:m-auto">
      <Sidebar />
      <div className="sm:col-start-2 border-r">
        <Navbar />
        <Stories />
        <BottomBar />
        <PostContainer />
      </div>
      <ActivityBar />
    </div>
  );
};

export { MyFeed };
