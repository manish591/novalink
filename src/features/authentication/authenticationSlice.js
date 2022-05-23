import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginService, signupService, bookmarkPost } from 'services';
import { useGetLocalStorage } from 'common';
import { editMyProfile } from 'features/profile/ProfileSlice';

const initialState = {
  authError: '',
  authStatus: 'IDLE',
  token: useGetLocalStorage('token', ''),
  currentUser: useGetLocalStorage('user', {}),
  isUserLoggedIn: useGetLocalStorage('login-status', false),
  bookmarks: [],
};

const loginUser = createAsyncThunk(
  'authentication/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await loginService(username, password);
      return res.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

const signupUser = createAsyncThunk(
  'authentication/singup',
  async (signupData, { rejectWithValue }) => {
    try {
      const res = await signupService(signupData);
      return res.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

const addToBookmark = createAsyncThunk(
  'authentication/bookmark',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await bookmarkPost(postId, token);
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  },
);

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isUserLoggedIn = false;
      state.token = '';
      state.currentUser = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.authStatus = 'LOADING';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.authStatus = 'SUCCESS';
      state.isUserLoggedIn = true;
      state.token = action.payload.encodedToken;
      state.currentUser = action.payload.foundUser;
      state.authError = '';
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.authStatus = 'FAILED';
      state.currentUser = {};
      state.authError = action.error.message;
    });
    builder.addCase(signupUser.pending, (state) => {
      state.authStatus = 'LOADING';
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.authStatus = 'SUCCESS';
      state.isUserLoggedIn = true;
      state.token = action.payload.encodedToken;
      state.currentUser = action.payload.createdUser;
      state.authError = '';
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.authStatus = 'FAILED';
      state.currentUser = {};
      state.authError = action.error.message;
    });
    builder.addCase(editMyProfile.fulfilled, (state, action) => {
      state.currentUser = action.payload.user;
    });
    builder.addCase(addToBookmark.pending, (state) => {
      state.authStatus = 'LOADING';
    });
    builder.addCase(addToBookmark.fulfilled, (state, action) => {
      state.authStatus = 'SUCCESS';
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(addToBookmark.rejected, (state, action) => {
      state.authStatus = 'FAILED';
      state.authError = action.error.message;
    });
  },
});

export { loginUser, signupUser, addToBookmark };
export const authenticationReducer = authenticationSlice.reducer;
export const { logoutUser } = authenticationSlice.actions;
