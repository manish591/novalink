import axios from 'axios';

const likePostService = (postId, token) => {
  return axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    },
  );
};

const dislikePostService = (postId, token) => {
  return axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    },
  );
};

export { likePostService, dislikePostService };
