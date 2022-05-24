import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { editMyProfile } from 'features/profile/ProfileSlice';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ setEditProfile }) => {
  const currentData = useSelector((state) => state.authentication.currentUser);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
  const [userEditedData, setUserEditedData] = useState({
    avatarUrl: currentData.avatarUrl,
    website: currentData.website,
    username: currentData.username,
    firstName: currentData.firstName,
    bio: currentData.bio,
    coverImg: currentData.coverImg,
  });
  const navigate = useNavigate();

  const handleEditProfile = (e) => {
    e.preventDefault();
    dispatch(editMyProfile({ userData: userEditedData, token }));
    setEditProfile(false);
    navigate(`/profile/${currentData.username}`);
  };

  return (
    <div className="fixed inset-0 w-full z-[30] bg-[rgba(25,25,25,20%)]">
      <div className="fixed inset-0 w-11/12 m-auto h-max max-w-[400px] bg-[white] shadow-xl py-2 px-2">
        <form className="grid gap-3" onSubmit={handleEditProfile}>
          <section className="flex items-center gap-2">
            <div className="w-16 h-16">
              <img
                src="https://i.pravatar.cc/150?img=23"
                alt="banner"
                className="min-w-full rounded-full outline outline-white outline-[3px]"
              />
            </div>
            <div>
              <h1 className="text-xl">@manish devrani</h1>
              <label
                className="text-[blue] text-sm profile-image"
                htmlFor="profile-image">
                Change Profile Picture
              </label>
              <input
                type="file"
                className="sr-only"
                id="profile-image"
                accept="image/*"
                onChange={(e) =>
                  setUserEditedData({
                    ...userEditedData,
                    avatarUrl: e.target.value,
                  })
                }
              />
            </div>
          </section>
          <section>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="w-full py-1 px-1.5 border rounded-md mt-1"
              id="username"
              value={userEditedData.username}
              onChange={(e) =>
                setUserEditedData({
                  ...userEditedData,
                  username: e.target.value,
                })
              }
              required
            />
          </section>
          <section>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full py-1 px-1.5 border rounded-md mt-1"
              value={userEditedData.firstName}
              onChange={(e) =>
                setUserEditedData({
                  ...userEditedData,
                  firstName: e.target.value,
                })
              }
              required
            />
          </section>
          <section>
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
              className="w-full py-1 px-1.5 border rounded-md mt-1"
              value={userEditedData.bio}
              onChange={(e) =>
                setUserEditedData({ ...userEditedData, bio: e.target.value })
              }
            />
          </section>
          <section>
            <label htmlFor="web-url">Website Url</label>
            <input
              type="text"
              id="web-url"
              className="w-full py-1 px-1.5 border rounded-md mt-1"
              value={userEditedData.website}
              onChange={(e) =>
                setUserEditedData({
                  ...userEditedData,
                  website: e.target.value,
                })
              }
            />
          </section>
          <section>
            <label htmlFor="cover-img">Cover Image Url</label>
            <input
              type="text"
              id="cover-img"
              className="w-full py-1 px-1.5 border rounded-md mt-1"
              value={userEditedData.coverImg}
              onChange={(e) =>
                setUserEditedData({
                  ...userEditedData,
                  coverImg: e.target.value,
                })
              }
            />
          </section>
          <section className="flex gap-2">
            <button
              type="submit"
              className="py-2 px-3 mt-3 bg-[lightblue] rounded-md">
              Update Details
            </button>
            <button
              type="button"
              className="py-2 px-3 mt-3 border rounded-md"
              onClick={() => {
                setEditProfile(false);
              }}>
              Cancel
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  setEditProfile: PropTypes.func.isRequired,
};

export { EditProfile };
