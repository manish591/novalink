import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginService,
  signupService,
  bookmarkPost,
  removeBookmark,
} from 'services';
import { useGetLocalStorage } from 'common';
import { editMyProfile } from 'features/profile/ProfileSlice';
import { followThisUser, unFollowThisUser } from 'features/users/usersSlice';

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

const removeFromBookmark = createAsyncThunk(
  'authtication/remove-bookmark',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await removeBookmark(postId, token);
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
      localStorage.setItem('token', '');
      localStorage.setItem('user', '');
      localStorage.setItem('login-status', false);
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
      state.currentUser = { ...action.payload.foundUser, password: '' };
      state.authError = '';
      localStorage.setItem('token', JSON.stringify(state.token));
      localStorage.setItem('user', JSON.stringify(state.currentUser));
      localStorage.setItem(
        'login-status',
        JSON.stringify(state.isUserLoggedIn),
      );
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
      state.currentUser = { ...action.payload.createdUser, password: '' };
      state.authError = '';
      localStorage.setItem('token', JSON.stringify(state.token));
      localStorage.setItem('user', JSON.stringify(state.currentUser));
      localStorage.setItem(
        'login-status',
        JSON.stringify(state.isUserLoggedIn),
      );
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
    builder.addCase(removeFromBookmark.pending, (state) => {
      state.authStatus = 'LOADING';
    });
    builder.addCase(removeFromBookmark.fulfilled, (state, action) => {
      state.authStatus = 'SUCCESS';
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(removeFromBookmark.rejected, (state, action) => {
      state.authStatus = 'FAILED';
      state.authError = action.error.message;
    });
    builder.addCase(followThisUser.fulfilled, (state, action) => {
      state.currentUser = action.payload.user;
    });
    builder.addCase(unFollowThisUser.fulfilled, (state, action) => {
      state.currentUser = action.payload.user;
    });
  },
});

export { loginUser, signupUser, addToBookmark, removeFromBookmark };
export const authenticationReducer = authenticationSlice.reducer;
export const { logoutUser } = authenticationSlice.actions;
