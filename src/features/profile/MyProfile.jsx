import React, { useState } from 'react';
import { BottomBar } from 'components';
import { posts } from 'common/data';
import { ProfileOptions } from './sub/ProfileOptions';

const MyProfile = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className="grid gap-4">
      <section className="relative">
        <div>
          <img
            src="https://images.unsplash.com/photo-1652207168165-5339236afbbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="banner"
            className="aspect-video object-cover min-w-full lg:h-60 mix-blend-darken"
          />
        </div>
        <div className="w-20 h-20 sm:w-28 sm:h-28 absolute bottom-[-15%] sm:bottom-[-10%] lg:bottom-[-20%] left-[50%] -translate-x-2/4">
          <img
            src="https://i.pravatar.cc/150?img=23"
            alt="banner"
            className="min-w-full rounded-full outline outline-white outline-[3px]"
          />
        </div>
        <div className="absolute left-0 w-full top-2 text-[white] flex items-center justify-between px-2 lg:hidden">
          <div className="flex items-center gap-4">
            <span className="material-icons-outlined text-gray-300">west</span>
            <h1 className="font-semibold text-xl text-gray-300">
              @albert_flores
            </h1>
          </div>
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => setOpenModal((om) => !om)}>
            <span className="material-icons-outlined text-gray-300">menu</span>
          </button>
        </div>
      </section>
      <div className="m-auto mt-6 sm:mt-14 mb-20 w-11/12 max-w-[1000px] grid gap-6">
        <section className="grid gap-1 text-center">
          <h1 className="font-semibold text-xl">Albert Flores</h1>
          <p className="text-gray-400 text-sm">@albert_flores</p>
          <p className="bg-gray-100 text-sm m-auto px-1 mt-2 w-max">
            Lifestyle Photographer, Traveler, Dreamer
          </p>
        </section>
        <section className="flex items-center justify-around sm:justify-center sm:gap-14">
          <div className="flex flex-col items-center">
            <p className="font-bold ">100</p>
            <p className="text-sm">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold ">230</p>
            <p className="text-sm">Photos</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold ">10k</p>
            <p className="text-sm">Followes</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold ">64</p>
            <p className="text-sm">Following</p>
          </div>
        </section>
        <section className="flex gap-4">
          <button
            type="button"
            className="flex-1 border py-1 sm:py-2 rounded-md">
            Edit Profile
          </button>
          <button type="button" className="border rounded-md px-0.5 sm:px-1">
            <div className="flex justify-center">
              <span className="material-icons-outlined">settings</span>
            </div>
          </button>
        </section>
        <section>
          <h1 className="font-thin text-xl">Your Posts</h1>
          <div className="grid grid-cols-3 gap-1 mt-4 sm:gap-8">
            {posts.map((item) => {
              return (
                <article key={item.id}>
                  <img
                    src={item.img}
                    alt="profile"
                    className="min-w-full object-cover aspect-square"
                  />
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <ProfileOptions openModal={openModal} setOpenModal={setOpenModal} />
      <BottomBar />
    </div>
  );
};

export { MyProfile };
