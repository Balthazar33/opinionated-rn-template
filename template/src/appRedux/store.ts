import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices';
import {pokemonApi} from '@services/testApi/pokemonApi';
import loadingHandler from './middleware/loadingHandler';
import reactotron from 'ReactotronConfig';

const configureAppStore = (preloadedState?: any) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(pokemonApi.middleware) // append RTKQuery middleware (for each API)
        .concat(loadingHandler), // custom middleware
    preloadedState,
    enhancers: __DEV__ ? [reactotron.createEnhancer!()] : [],
  });
  return store;
};

export default configureAppStore;
