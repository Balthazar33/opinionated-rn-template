import {NavigationProp, ParamListBase, RouteProp, StackActionHelpers, StackNavigationState} from '@react-navigation/native';
import {NativeStackNavigationEventMap, NativeStackNavigationOptions} from 'react-native-screens/lib/typescript/native-stack/types';

export enum StackScreens {
  DummyScreen = 'DummyScreen',
  DummyScreenWithScroll = 'DummyScreenWithScroll',
  ApiCallScreen = 'ApiCallScreen',
  PokemonDetailScreen = 'PokemonDetailScreen',
}

export type NativeStackNavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
  NavigatorID extends string | undefined = undefined
> = NavigationProp<
  ParamList,
  RouteName,
  NavigatorID,
  StackNavigationState<ParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
> &
  StackActionHelpers<ParamList>;

export type NativeStackScreenProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
  NavigatorID extends string | undefined = undefined
> = {
  navigation: NativeStackNavigationProp<ParamList, RouteName, NavigatorID>;
  route: RouteProp<ParamList, RouteName>;
};

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
  // add more screens here...
};
