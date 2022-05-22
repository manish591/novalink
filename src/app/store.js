import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer, profileReducer } from 'features';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
