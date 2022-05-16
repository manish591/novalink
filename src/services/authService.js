import axios from 'axios';

const loginService = (username, password) => {
  return axios.post('/api/auth/login', {
    username,
    password,
  });
};

export { loginService };
