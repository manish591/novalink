import { createSlice } from '@reduxjs/toolkit';
import { API_STATE } from 'common';

const initialState = {
  usersStatus: API_STATE.IDLE,
  usersData: [],
  usersError: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const usersReducer = usersSlice.reducer;
