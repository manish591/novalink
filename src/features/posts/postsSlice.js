import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_STATE } from 'common';
import {
  getAllPosts,
  createPost,
  deletePost,
  editPost,
  likePostService,
  dislikePostService,
  getPostCommentsService,
  addCommentService,
  deleteCommentService,
  editCommentService,
} from 'services';

const initialState = {
  postStatus: API_STATE.IDLE,
  likeStatus: API_STATE.IDLE,
  commentStatus: API_STATE.IDLE,
  commentError: '',
  postError: '',
  likeError: '',
  postData: [],
  commentData: [],
};

const getPosts = createAsyncThunk(
  'posts/get',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllPosts();
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const createMyPost = createAsyncThunk(
  'posts/create',
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const res = await createPost(postData, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const deleteMyPost = createAsyncThunk(
  'posts/delete',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await deletePost(postId, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const editMyPost = createAsyncThunk(
  'posts/edit',
  async ({ postData, postId, token }, { rejectWithValue }) => {
    try {
      const res = await editPost(postData, postId, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const likePost = createAsyncThunk(
  'posts/like',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await likePostService(postId, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const dislikePost = createAsyncThunk(
  'posts/dislike',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await dislikePostService(postId, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const getPostComments = createAsyncThunk(
  'posts/getComment',
  async ({ postId }, { rejectWithValue }) => {
    try {
      const res = await getPostCommentsService(postId);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const addPostComment = createAsyncThunk(
  'posts/addComment',
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const res = await addCommentService(postId, commentData, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const deletePostComment = createAsyncThunk(
  'posts/deleteComment',
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const res = await deleteCommentService(postId, commentId, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const editPostComment = createAsyncThunk(
  'posts/editComment',
  async ({ postId, commentId, token, commentData }, { rejectWithValue }) => {
    try {
      const res = await editCommentService(
        postId,
        commentId,
        token,
        commentData,
      );
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.postStatus = API_STATE.LOADING;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.postStatus = API_STATE.SUCCESS;
      state.postData = action.payload.posts;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.postStatus = API_STATE.FAILED;
      state.postData = [];
      state.postError = action.error.message;
    });
    builder.addCase(createMyPost.pending, (state) => {
      state.postStatus = API_STATE.LOADING;
    });
    builder.addCase(createMyPost.fulfilled, (state, action) => {
      state.postStatus = API_STATE.SUCCESS;
      state.postData = action.payload.posts;
    });
    builder.addCase(createMyPost.rejected, (state, action) => {
      state.postStatus = API_STATE.FAILED;
      state.postData = [];
      state.postError = action.error.message;
    });
    builder.addCase(deleteMyPost.pending, (state) => {
      state.postStatus = API_STATE.LOADING;
    });
    builder.addCase(deleteMyPost.fulfilled, (state, action) => {
      state.postStatus = API_STATE.SUCCESS;
      state.postData = action.payload.posts;
    });
    builder.addCase(deleteMyPost.rejected, (state, action) => {
      state.postStatus = API_STATE.FAILED;
      state.postData = [];
      state.postError = action.error.message;
    });
    builder.addCase(editMyPost.pending, (state) => {
      state.postStatus = API_STATE.LOADING;
    });
    builder.addCase(editMyPost.fulfilled, (state, action) => {
      state.postStatus = API_STATE.SUCCESS;
      state.postData = action.payload.posts;
    });
    builder.addCase(editMyPost.rejected, (state, action) => {
      state.postStatus = API_STATE.FAILED;
      state.postData = [];
      state.postError = action.error.message;
    });
    builder.addCase(likePost.pending, (state) => {
      state.likeStatus = API_STATE.LOADING;
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.likeStatus = API_STATE.SUCCESS;
      state.postData = action.payload.posts;
    });
    builder.addCase(likePost.rejected, (state, action) => {
      state.likeStatus = API_STATE.FAILED;
      state.postData = [];
      state.likeError = action.error.message;
    });
    builder.addCase(dislikePost.pending, (state) => {
      state.likeStatus = API_STATE.LOADING;
    });
    builder.addCase(dislikePost.fulfilled, (state, action) => {
      state.likeStatus = API_STATE.SUCCESS;
      state.postData = action.payload.posts;
    });
    builder.addCase(dislikePost.rejected, (state, action) => {
      state.likeStatus = API_STATE.FAILED;
      state.postData = [];
      state.likeError = action.error.message;
    });
    builder.addCase(getPostComments.pending, (state) => {
      state.commentStatus = API_STATE.LOADING;
    });
    builder.addCase(getPostComments.fulfilled, (state, action) => {
      state.commentStatus = API_STATE.SUCCESS;
      state.commentData = action.payload.comments
        ? action.payload.comments
        : [];
    });
    builder.addCase(getPostComments.rejected, (state, action) => {
      state.commentStatus = API_STATE.FAILED;
      state.commentData = [];
      state.commentError = action.error.message;
    });
    builder.addCase(addPostComment.pending, (state) => {
      state.commentStatus = API_STATE.LOADING;
    });
    builder.addCase(addPostComment.fulfilled, (state, action) => {
      state.commentStatus = API_STATE.SUCCESS;
      state.postData = action.payload.posts;
    });
    builder.addCase(addPostComment.rejected, (state, action) => {
      state.commentStatus = API_STATE.FAILED;
      state.postData = [];
      state.commentError = action.error.message;
    });
    builder.addCase(deletePostComment.pending, (state) => {
      state.commentStatus = API_STATE.LOADING;
    });
    builder.addCase(deletePostComment.fulfilled, (state, action) => {
      state.commentStatus = API_STATE.SUCCESS;
      state.postData = action.payload.posts;
    });
    builder.addCase(deletePostComment.rejected, (state, action) => {
      state.commentStatus = API_STATE.FAILED;
      state.postData = [];
      state.commentError = action.error.message;
    });
    builder.addCase(editPostComment.pending, (state) => {
      state.commentStatus = API_STATE.LOADING;
    });
    builder.addCase(editPostComment.fulfilled, (state, action) => {
      state.commentStatus = API_STATE.SUCCESS;
      state.postData = action.payload.posts;
    });
    builder.addCase(editPostComment.rejected, (state, action) => {
      state.commentStatus = API_STATE.FAILED;
      state.postData = [];
      state.commentError = action.error.message;
    });
  },
});

export {
  getPosts,
  createMyPost,
  deleteMyPost,
  editMyPost,
  likePost,
  dislikePost,
  getPostComments,
  addPostComment,
  deletePostComment,
  editPostComment,
};
export const postReducer = postSlice.reducer;
