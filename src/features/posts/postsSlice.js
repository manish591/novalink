import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const postReducer = postSlice.reducer;
