import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, StackScreens} from '../../navigation/types';

export type PokemonDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  StackScreens.PokemonDetailScreen
>;
