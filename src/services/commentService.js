import axios from 'axios';

const getPostCommentsService = (postId) => {
  return axios.get(`/api/comments/${postId}`);
};

const addCommentService = (postId, commentData, token) => {
  return axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    },
  );
};

const deleteCommentService = (postId, commentId, token) => {
  return axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: {
      authorization: token,
    },
  });
};

const editCommentService = (postId, commentId, token, commentData) => {
  return axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    },
  );
};

export {
  getPostCommentsService,
  addCommentService,
  deleteCommentService,
  editCommentService,
};
