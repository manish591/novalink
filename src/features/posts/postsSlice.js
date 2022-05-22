import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_STATE } from 'common';
import { getAllPosts } from 'services';

const initialState = {
  postStatus: API_STATE.IDLE,
  postError: '',
  postData: [],
};

const getPosts = createAsyncThunk('posts/get', async ({ rejectWithValue }) => {
  try {
    const res = await getAllPosts();
    return res.data;
  } catch (err) {
    console.error(err);
    return rejectWithValue(err.response.data);
  }
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {},
});

export { getPosts };
export const postReducer = postSlice.reducer;
