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

export { followUser };
