import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_STATE } from 'common';
import { getAllPosts, createPost, deletePost } from 'services';

const initialState = {
  postStatus: API_STATE.IDLE,
  postError: '',
  postData: [],
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
  },
});

export { getPosts, createMyPost, deleteMyPost };
export const postReducer = postSlice.reducer;
