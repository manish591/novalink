import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BottomBar, Loader } from 'components';
import { posts } from 'common/data';
import { API_STATE } from 'common';
import { followThisUser, unFollowThisUser } from 'features/users/usersSlice';
import { ProfileOptions } from './components/profile-options/ProfileOptions';
import { getUserData } from './ProfileSlice';
import { UserNotFound } from './components/user-not-found/UsetNotFound';
import { EditProfile } from './components/edit-profile/EditProfile';

const MyProfile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username } = useParams();
  const profileStatus = useSelector((state) => state.profile.profileStatus);
  const profileData = useSelector((state) => state.profile.profileData);
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const token = useSelector((state) => state.authentication.token);

  useEffect(() => {
    if (username) {
      dispatch(getUserData(username));
    }
  }, [username, currentUser]);

  return (
    <div>
      {profileStatus === API_STATE.LOADING && <Loader />}
      {profileStatus === API_STATE.FAILED && <UserNotFound />}
      {profileStatus === API_STATE.SUCCESS && (
        <div>
          <div className="grid gap-4 grid-cols-1">
            <section className="relative">
              <div>
                <img
                  src={profileData?.coverImg}
                  alt="banner"
                  className="aspect-video object-cover min-w-full lg:h-60 mix-blend-darken"
                />
              </div>
              <div className="w-20 h-20 sm:w-28 sm:h-28 absolute bottom-[-15%] sm:bottom-[-10%] lg:bottom-[-20%] left-[50%] -translate-x-2/4">
                <img
                  src={profileData?.avatarUrl}
                  alt="banner"
                  className="min-w-full rounded-full outline outline-white outline-[3px]"
                />
              </div>
              <div className="absolute left-0 w-full top-0 py-2 flex items-center justify-between px-2 lg:hidden">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center"
                    onClick={() => {
                      navigate(-1);
                    }}>
                    <span className="material-icons-outlined">west</span>
                  </button>
                  <h1 className="font-semibold text-xl">
                    @{profileData.username}
                  </h1>
                </div>
                {currentUser?.username === profileData.username ? (
                  <button
                    type="button"
                    className="flex items-center justify-center"
                    onClick={() => setOpenModal((om) => !om)}>
                    <span className="material-icons-outlined">menu</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="flex items-center justify-center">
                    <span className="material-icons-outlined">more_vert</span>
                  </button>
                )}
              </div>
            </section>
            <div className="m-auto mt-6 sm:mt-14 mb-20 w-11/12 max-w-[1000px] grid gap-6 grid-cols-1">
              <section className="grid gap-1 grid-cols-1 text-center overflow-hidden">
                <h1 className="font-semibold text-xl">
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <p className="text-gray-400 text-sm">@{profileData.username}</p>
                <p className="bg-gray-100 text-sm m-auto px-1 mt-2 w-max truncate">
                  {profileData.bio}
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
                  <p className="font-bold ">{profileData.followers.length}</p>
                  <p className="text-sm">Followes</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold ">{profileData.following.length}</p>
                  <p className="text-sm">Following</p>
                </div>
              </section>
              <section className="flex gap-4">
                {currentUser?.username === profileData.username ? (
                  <button
                    type="button"
                    className="flex-1 border py-1 sm:py-2 rounded-md"
                    onClick={() => {
                      setEditProfile(true);
                    }}>
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="flex-1 border py-1 sm:py-2 rounded-md">
                      Message
                    </button>
                    {currentUser.following.some(
                      (item) => item._id === profileData._id,
                    ) ? (
                      <button
                        type="button"
                        className="flex-1 border py-1.5 sm:py-2 rounded-md bg-[black] text-[white]"
                        onClick={() => {
                          dispatch(
                            unFollowThisUser({
                              followUserId: profileData._id,
                              token,
                            }),
                          );
                        }}>
                        Following
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex-1 border py-1.5 sm:py-2 rounded-md"
                        onClick={() => {
                          dispatch(
                            followThisUser({
                              followUserId: profileData._id,
                              token,
                            }),
                          );
                        }}>
                        Follow
                      </button>
                    )}
                  </>
                )}
                {currentUser?.username === profileData.username && (
                  <button
                    type="button"
                    className="border rounded-md px-0.5 sm:px-1">
                    <Link to="/settings" className="flex justify-center">
                      <span className="material-icons-outlined">settings</span>
                    </Link>
                  </button>
                )}
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
          </div>
        </div>
      )}
      {editProfile && <EditProfile setEditProfile={setEditProfile} />}
      <ProfileOptions openModal={openModal} setOpenModal={setOpenModal} />
      <BottomBar />
    </div>
  );
};

export { MyProfile };
