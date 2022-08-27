import React from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { followThisUser, unFollowThisUser } from 'features/users/usersSlice';
import { Link } from 'react-router-dom';

const UserList = ({ showUserList, setShowUserList, userData }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const profileData = useSelector((state) => state.profile.profileData);

  return (
    <section className="fixed inset-0 z-[30]">
      <button
        type="button"
        onClick={() =>
          setShowUserList((prev) => {
            return { ...prev, isOpen: false };
          })
        }
        className="fixed inset-0 bg-[rgba(25,25,25,50%)]">
        &nbsp;
      </button>
      <div className="fixed inset-0 h-max m-auto w-[80%] max-w-[400px] bg-[white] rounded-lg">
        <h3 className="font-bold border-b p-4 pb-2">{showUserList.type}</h3>
        {userData.length < 1 && (
          <div className="h-[150px] p-4 flex items-center justify-center">
            <div className="text-center">
              <span className="material-icons-outlined text-4xl">
                person_add
              </span>
              <h1>
                {currentUser.username !== profileData.username
                  ? 'Their'
                  : 'Your'}
                &nbsp;
                {showUserList.type} will appear here
              </h1>
            </div>
          </div>
        )}
        <ul className="mt-4 p-4 flex flex-col gap-2 py-2">
          {userData &&
            userData.map((item) => {
              return (
                <li
                  key={item._id}
                  className="flex py-2 w-full items-center rounded-md">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatarUrl}
                      alt="person"
                      className="w-[45px] h-[45px] object-cover rounded-full"
                    />
                    <Link to={`/profile/${item.username}`}>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-sm">@{item.username}</p>
                    </Link>
                  </div>
                  {currentUser._id !== item._id && (
                    <div className="ml-auto">
                      {currentUser.following.some(
                        (user) => user._id === item._id,
                      ) ? (
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(
                              unFollowThisUser({
                                followUserId: item._id,
                                token,
                              }),
                            );
                          }}
                          className="py-1 w-20 text-sm border border-[black] rounded-md">
                          Following
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(
                              followThisUser({
                                followUserId: item._id,
                                token,
                              }),
                            );
                          }}
                          className="text-[white] py-1 w-20 text-sm bg-[black] rounded-md">
                          Follow
                        </button>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

UserList.propTypes = {
  showUserList: propTypes.object.isRequired,
  setShowUserList: propTypes.func.isRequired,
  userData: propTypes.array.isRequired,
};

export { UserList };
