import { configureStore } from '@reduxjs/toolkit';
import {
  authenticationReducer,
  profileReducer,
  postReducer,
  usersReducer,
} from 'features';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    profile: profileReducer,
    post: postReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
