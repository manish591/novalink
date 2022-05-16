import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from 'features';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
