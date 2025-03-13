export enum StackScreens {
  DummyScreen = 'DummyScreen',
  DummyScreenWithScroll = 'DummyScreenWithScroll',
  ApiCallScreen = 'ApiCallScreen',
  PokemonDetailScreen = 'PokemonDetailScreen',
  InfiniteQueryScreen = 'InfiniteQueryScreen'
}

export type RootStackParamList = {
  /**
   * Add screens in the following format:
   * <screen name>: <the param(s) it expects>.
   * Specify 'undefined' if the screen does not expect any params.
   */
  DummyScreen: undefined;
  DummyScreenWithScroll: undefined;
  ApiCallScreen: undefined;
  PokemonDetailScreen: {name: string};
  InfiniteQueryScreen: undefined;
  // add more screens here...
};
