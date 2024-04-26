import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import themeSlice from './themeSlice';
import appSlice from './appSlice';
import {pokeGraphApi} from '@services/graphqlApi/pokeGraphApi';
import pokemonSlice from './pokemonSlice';
import {pokemonStorage, mmkvPersistor} from '../../storage/mmkvStorage';
import {StorageKeys} from '../../storage/storage.utils';

// persist config for theme
const themeConfig = {
  key: StorageKeys.THEME,
  storage: mmkvPersistor,
};
// persist config for pokemon list
const pokemonListConfig = {
  key: StorageKeys.POKEMON_LIST,
  storage: pokemonStorage,
};

const rootReducer = combineReducers({
  app: appSlice,
  [pokeGraphApi.reducerPath]: pokeGraphApi.reducer,
  theme: persistReducer(themeConfig, themeSlice),
  pokemon: persistReducer(pokemonListConfig, pokemonSlice),
});

export default rootReducer;
