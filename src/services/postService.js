import axios from 'axios';

const getAllPosts = () => {
  return axios.get('/api/posts');
};

export { getAllPosts };
