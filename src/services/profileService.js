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

export { getUser, editUserProfile };
