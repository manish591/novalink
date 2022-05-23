import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_STATE } from 'common';
import { followUser, getAllUsers } from 'services';

const initialState = {
  usersStatus: API_STATE.IDLE,
  followStatus: API_STATE.IDLE,
  followError: '',
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

const followThisUser = createAsyncThunk(
  'users/follow',
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const res = await followUser(followUserId, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
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
    builder.addCase(followThisUser.pending, (state) => {
      state.followStatus = API_STATE.LOADING;
    });
    builder.addCase(followThisUser.fulfilled, (state, action) => {
      state.followStatus = API_STATE.SUCCESS;
      state.usersData = [...state.usersData].map((item) => {
        return item._id === action.payload.followUser._id
          ? action.payload.followUser
          : item;
      });
    });
    builder.addCase(followThisUser.rejected, (state, action) => {
      state.followStatus = API_STATE.FAILED;
      state.usersData = [];
      state.followError = action.error.message;
    });
  },
});

export { getAllUsersData, followThisUser };
export const usersReducer = usersSlice.reducer;
