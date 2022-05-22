import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_STATE } from 'common';
import { getAllPosts } from 'services';

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
  },
});

export { getPosts };
export const postReducer = postSlice.reducer;
