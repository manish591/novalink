import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { followThisUser, unFollowThisUser } from 'features/users/usersSlice';
import { Link } from 'react-router-dom';

const ActivityBar = ({ setIsOpenPostModal }) => {
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.usersData).filter(
    (item) => item.username !== currentUser.username,
  );

  return (
    <div className="hidden bg-[#FFFFFF] sticky lg:block fixed h-[100vh] top-0 w-[350px] lg:py-2">
      <div className="py-2 px-4 grid gap-8 h-full ">
        <section>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full">
              <img
                src={currentUser.avatarUrl}
                alt="avatar"
                className="min-w-full rounded-full"
              />
            </div>
            <div>
              <p>{currentUser.firstName}</p>
              <p className="text-gray-400 leading-[1.1]">
                {currentUser.username}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <section className="flex items-center justify-between">
              <p>Suggestions For You</p>
              <button type="button">See All</button>
            </section>
            <section className="grid gap-4 mt-5">
              {allUsers.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex items-center justify-between">
                    <Link
                      to={`/profile/${item.username}`}
                      className="flex items-center gap-2 cursor-pointer">
                      <div className="w-10 h-10 rounded-full">
                        <img
                          src={item.avatarUrl}
                          alt="avatar"
                          className="min-w-full rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-sm">
                          {item.firstName} {item.lastName}
                        </p>
                        <p className="text-gray-400 leading-[1.1] text-xs">
                          {item.username}
                        </p>
                      </div>
                    </Link>
                    {currentUser.following.some(
                      (user) => user._id === item._id,
                    ) ? (
                      <button
                        type="button"
                        className="py-1 w-20 text-sm border border-[black] rounded-md"
                        onClick={() => {
                          dispatch(
                            unFollowThisUser({
                              followUserId: item._id,
                              token,
                            }),
                          );
                        }}>
                        Following
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="text-[white] py-1 w-20 text-sm bg-[black] rounded-md"
                        onClick={() => {
                          dispatch(
                            followThisUser({
                              followUserId: item._id,
                              token,
                            }),
                          );
                        }}>
                        Follow
                      </button>
                    )}
                  </div>
                );
              })}
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
              onClick={() => {
                setIsOpenPostModal((prev) => !prev);
              }}
              className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-[black] items-end rounded-md shadow-md">
              Create Post
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

ActivityBar.propTypes = {
  setIsOpenPostModal: PropTypes.func.isRequired,
};

export { ActivityBar };
