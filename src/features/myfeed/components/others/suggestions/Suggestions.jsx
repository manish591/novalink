import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { followThisUser, unFollowThisUser } from 'features/users/usersSlice';

const Suggestions = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const token = useSelector((state) => state.authentication.token);
  const allUsers = useSelector((state) => state.users.usersData).filter(
    (item) => item.username !== currentUser.username,
  );

  return (
    <div className="mt-10">
      <section className="flex items-center justify-between">
        <p>Suggestions For You</p>
        <button type="button">See All</button>
      </section>
      <section className="grid gap-4 mt-5">
        {allUsers.slice(0, 5).map((item) => {
          return (
            <div key={item._id} className="flex items-center justify-between">
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
                  <p className="text-sm">{item.name}</p>
                  <p className="text-gray-400 leading-[1.1] text-xs">
                    {item.username}
                  </p>
                </div>
              </Link>
              {currentUser.following.some((user) => user._id === item._id) ? (
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
  );
};

export { Suggestions };
