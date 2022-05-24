import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, editUserProfile } from 'services';
import { API_STATE } from 'common';

const initialState = {
  profileStatus: API_STATE.IDLE,
  profileData: null,
  profileError: '',
};

const getUserData = createAsyncThunk(
  'profile/get',
  async (username, { rejectWithValue }) => {
    try {
      const res = await getUser(username);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const editMyProfile = createAsyncThunk(
  'profile/edit',
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const res = await editUserProfile(userData, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.profileStatus = API_STATE.LOADING;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.profileStatus = API_STATE.SUCCESS;
      state.profileData = action.payload.user;
      state.profileError = '';
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.profileStatus = API_STATE.FAILED;
      state.profileData = null;
      state.profileError = action.error.message;
    });
    builder.addCase(editMyProfile.pending, (state) => {
      state.profileStatus = API_STATE.LOADING;
    });
    builder.addCase(editMyProfile.fulfilled, (state, action) => {
      state.profileStatus = API_STATE.SUCCESS;
      state.profileData = action.payload.user;
      state.profileError = '';
    });
    builder.addCase(editMyProfile.rejected, (state, action) => {
      state.profileStatus = API_STATE.FAILED;
      state.profileData = null;
      state.profileError = action.error.message;
    });
  },
});

export { getUserData, editMyProfile };
export const profileReducer = profileSlice.reducer;
