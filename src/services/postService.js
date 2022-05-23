import axios from 'axios';

const getAllPosts = () => {
  return axios.get('/api/posts');
};

const createPost = (post, token) => {
  return axios.post(
    '/api/posts',
    { post },
    {
      headers: {
        authorization: token,
      },
    },
  );
};

export { getAllPosts, createPost };
