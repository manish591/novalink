import axios from 'axios';

const loginService = (username, password) => {
  return axios.post('/api/auth/login', {
    username,
    password,
  });
};

const signupService = (signupData) => {
  return axios.post('/api/auth/signup', signupData);
};

export { loginService, signupService };
