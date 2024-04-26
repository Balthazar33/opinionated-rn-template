import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices';
import {pokeGraphApi} from '@services/graphqlApi/pokeGraphApi';
import loadingHandler from './middleware/loadingHandler';

const configureAppStore = (preloadedState?: any) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(pokeGraphApi.middleware) // append RTKQuery middleware (for each API)
        .concat(loadingHandler), // custom middleware
    preloadedState,
  });
  return store;
};

export default configureAppStore;
