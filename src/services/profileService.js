import axios from 'axios';

const getUser = (username) => {
  return axios.get(`/api/users/${username}`);
};

const editUserProfile = (userData, token) => {
  return axios.post(
    '/api/users/edit',
    { userData },
    {
      headers: { authorization: token },
    },
  );
};

const getUserPosts = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};

export { getUser, editUserProfile, getUserPosts };
