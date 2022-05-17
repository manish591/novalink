import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginService, signupService } from 'services';

const initialState = {
  token: '',
  authError: '',
  currentUser: {},
  authStatus: 'IDLE',
  isUserLoggedIn: false,
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

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
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
  },
});

export { loginUser, signupUser };
export const authenticationReducer = authenticationSlice.reducer;
