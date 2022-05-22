import React from 'react';

const CreatePostModal = () => {
  return (
    <div className="fixed inset-0 bg-white z-10 grid grid-rows-[auto_minmax(0,_1fr)_auto]">
      <div className="shadow py-3">
        <section className="w-11/12 m-auto flex items-center justify-between">
          <div className="flex items-center justify-center">
            <span className="material-icons-outlined">west</span>
          </div>
          <h1 className="text-xl font-bold">Create Post</h1>
          <button type="button" className="font-bold">
            Done
          </button>
        </section>
      </div>
      <section className="mt-4 overflow-y-auto">
        <div className="w-11/12 m-auto">
          <section className="grid gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
                <img
                  src="https://i.pravatar.cc/150?img=19"
                  alt="avatar"
                  className="min-w-full rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">manish18</h3>
                <p className="text-xs sm:text-sm">Allenton, New Mexico</p>
              </div>
            </div>
            <form>
              <section>
                <textarea
                  name="caption"
                  id="caption"
                  className="resize-y py-2 px-2 border-gray-200 outline-none text-base"
                  placeholder="What is in your mind manish?"
                />
                <label htmlFor="caption" className="sr-only">
                  caption
                </label>
              </section>
            </form>
            <section className="py-2">
              <h1>Add or Remove photos</h1>
              <div className="w-[150px] mt-2">
                <img
                  src="https://images.unsplash.com/photo-1653175112410-1b66f3847950?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500"
                  alt=""
                  className="max-w-full aspect-square object-cover"
                />
              </div>
            </section>
          </section>
        </div>
      </section>
      <section className="mt-4 pb-4">
        <div className="w-11/12 m-auto grid grid-cols-2 gap-4">
          <button
            type="button"
            className="border py-2 px-4 rounded-md flex gap-2 items-center">
            <span className="material-icons-outlined">image</span>
            <span>Media</span>
          </button>
          <button
            type="button"
            className="border py-2 px-4 rounded-md flex gap-2 items-center">
            <span className="material-icons-outlined">insert_link</span>
            <span>Attachment</span>
          </button>
          <button
            type="button"
            className="border py-2 px-4 rounded-md flex gap-2 items-center">
            <span className="material-icons-outlined">place</span>
            <span>Location</span>
          </button>
          <button
            type="button"
            className="border py-2 px-4 rounded-md flex gap-2 items-center">
            <span className="material-icons-outlined">person_add</span>
            <span>Add Someone</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export { CreatePostModal };
