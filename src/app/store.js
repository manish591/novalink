import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer, profileReducer, postReducer } from 'features';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    profile: profileReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
