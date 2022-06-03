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

const deletePost = (postId, token) => {
  return axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });
};

const editPost = (postData, postId, token) => {
  return axios.post(
    `/api/posts/edit/${postId}`,
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

const bookmarkPost = (postId, token) => {
  return axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    },
  );
};

const removeBookmark = (postId, token) => {
  return axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    },
  );
};

export {
  getAllPosts,
  createPost,
  deletePost,
  editPost,
  bookmarkPost,
  removeBookmark,
};
