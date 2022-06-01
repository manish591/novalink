import axios from 'axios';

const getAllPosts = () => {
  return axios.get('/api/posts');
};

const createPost = (postData, token) => {
  return axios.post(
    '/api/posts',
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    },
  );
};

export { getAllPosts, createPost };
