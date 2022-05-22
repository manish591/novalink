import { createSlice } from '@reduxjs/toolkit';
import { API_STATE } from 'common';

const initialState = {
  postStatus: API_STATE.IDLE,
  postError: '',
  postData: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const postReducer = postSlice.reducer;
