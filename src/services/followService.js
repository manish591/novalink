import axios from 'axios';

const followUser = (followUserId, token) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    },
  );
};

const unfollowUser = (followUserId, token) => {
  return axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    },
  );
};

export { followUser, unfollowUser };
