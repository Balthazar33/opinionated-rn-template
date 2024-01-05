import {MMKVLoader} from 'react-native-mmkv-storage';

/**
 * Note: Create new db instances for different types of data.
 * This prevents the creation of a large single db which could
 * slow down the app.
 */
export const mmkvPersistor = new MMKVLoader().initialize();
export const pokemonStorage = new MMKVLoader()
  .withInstanceID('pokemon')
  .initialize();
