import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_STATE } from 'common';
import { getAllUsers } from 'services';

const initialState = {
  usersStatus: API_STATE.IDLE,
  usersData: [],
  usersError: '',
};

const getAllUsersData = createAsyncThunk(
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
  extraReducers: (builder) => {
    builder.addCase(getAllUsersData.pending, (state) => {
      state.usersStatus = API_STATE.LOADING;
    });
    builder.addCase(getAllUsersData.fulfilled, (state, action) => {
      state.usersStatus = API_STATE.SUCCESS;
      state.usersData = action.payload.users;
    });
    builder.addCase(getAllUsersData.rejected, (state, action) => {
      state.usersStatus = API_STATE.FAILED;
      state.usersData = [];
      state.usersError = action.error.message;
    });
  },
});

export { getAllUsersData };
export const usersReducer = usersSlice.reducer;
