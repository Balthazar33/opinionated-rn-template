import {RootStackParamList, StackScreens} from '@/navigation/types';
import {StackScreenProps} from '@react-navigation/stack';

export interface PokemonItemType {
  name: string;
  url: string;
}

export type ApiCallScreenProps = StackScreenProps<
  RootStackParamList,
  StackScreens.ApiCallScreen
>;
