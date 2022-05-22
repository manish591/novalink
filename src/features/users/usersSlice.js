import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_STATE } from 'common';
import { getAllUsers } from 'services';

const initialState = {
  usersStatus: API_STATE.IDLE,
  usersData: [],
  usersError: '',
};

const getUsers = createAsyncThunk(
  'users/get',
  async (_, { rejectWithValue }) => {
    try {
      const res = getAllUsers();
      return (await res).data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.responce.data);
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},
});

export { getUsers };
export const usersReducer = usersSlice.reducer;
