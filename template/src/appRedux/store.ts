import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices';
import {pokemonApi} from '../services/testApi/pokemonApi';
import loadingHandler from './middleware/loadingHandler';

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(pokemonApi.middleware) // append RTKQuery middleware (for each API)
        .concat(loadingHandler), // custom middleware
  });
  return store;
};

export default configureAppStore;
