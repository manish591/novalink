import React from 'react';

const ActivityBar = () => {
  return (
    <div className="hidden sticky lg:block br-2 fixed h-[100vh] top-0 w-[300px] lg:py-2">
      <div className="py-2 px-4 grid gap-8 h-full ">
        <section>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full">
              <img
                src="https://i.pravatar.cc/150?img=10"
                alt="avatar"
                className="min-w-full rounded-full"
              />
            </div>
            <div>
              <p>Manish Devrani</p>
              <p className="text-gray-400 leading-[1.1]">manish122</p>
            </div>
          </div>
          <div className="mt-10">
            <section className="flex items-center justify-between">
              <p>Suggestions For You</p>
              <button type="button" className="text-[hotpink]">
                See All
              </button>
            </section>
            <section className="grid gap-6 mt-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src="https://i.pravatar.cc/150?img=25"
                      alt="avatar"
                      className="min-w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm">Manish Devrani</p>
                    <p className="text-gray-400 leading-[1.1] text-xs">
                      manish122
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-[hotpink] py-1 w-20 text-sm bg-[hotpink] text-[white] rounded-md">
                  Follow
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src="https://i.pravatar.cc/150?img=11"
                      alt="avatar"
                      className="min-w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm">Manish Devrani</p>
                    <p className="text-gray-400 leading-[1.1] text-xs">
                      manish122
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-[hotpink] py-1 w-20 text-sm bg-[hotpink] text-[white] rounded-md">
                  Follow
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src="https://i.pravatar.cc/150?img=20"
                      alt="avatar"
                      className="min-w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm">Manish Devrani</p>
                    <p className="text-gray-400 leading-[1.1] text-xs">
                      manish122
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-[hotpink] py-1 w-20 text-sm border rounded-md">
                  Unfollow
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src="https://i.pravatar.cc/150?img=16"
                      alt="avatar"
                      className="min-w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm">Manish Devrani</p>
                    <p className="text-gray-400 leading-[1.1] text-xs">
                      manish122
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-[hotpink] py-1 w-20 text-sm bg-[hotpink] text-[white] rounded-md">
                  Follow
                </button>
              </div>
            </section>
          </div>
        </section>
        <section className="items-end">
          <section>
            <p className="font-bold">Latest Post Activity</p>
            <div className="mt-2 py-4 px-2 bg-white shadow-md">
              <div className="flex items-center gap-2">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="beach"
                  />
                </div>
                <div>
                  <h2>My Post Title</h2>
                  <section className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1">
                      <span className="material-icons-outlined text-lg">
                        favorite_border
                      </span>
                      <p className="text-[0.625rem]">10K</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-icons-outlined text-lg">
                        chat
                      </span>
                      <p className="text-[0.625rem]">4K</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-icons-outlined text-lg">
                        ios_share
                      </span>
                      <p className="text-[0.625rem]">7K</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4">
            <button
              type="button"
              className="border w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-[white] items-end rounded-md shadow-md">
              Create Post
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export { ActivityBar };
