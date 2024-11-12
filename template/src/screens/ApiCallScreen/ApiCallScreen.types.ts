import {NativeStackScreenProps, RootStackParamList, StackScreens} from '@/navigation/types';

export interface PokemonItemType {
  name: string;
  url: string;
}

export type ApiCallScreenProps = NativeStackScreenProps<
  RootStackParamList,
  StackScreens.ApiCallScreen
>;
