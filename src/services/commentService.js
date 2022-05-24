import axios from 'axios';

const getPostCommentsService = (postId) => {
  return axios.get(`/api/comments/${postId}`);
};

export { getPostCommentsService };
