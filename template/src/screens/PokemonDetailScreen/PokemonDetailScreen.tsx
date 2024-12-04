import React from 'react';
import {StyleSheet} from 'react-native';

import {sizer} from '@utils/metrics';
import {SCREEN_PADDING} from '@utils/constants';
import BaseScreen from '@/containers/BaseScreen';
import {usePokemonDetailScreen} from './PokemonDetailScreen.hook';
import {TextRegular10, TextRegular12} from '@components/Typography';
import {PokemonDetailScreenProps} from './PokemonDetailScreen.types';

export const PokemonDetailScreen = ({route}: PokemonDetailScreenProps) => {
  const {name} = route?.params || {};
  const {currentPokemon} = usePokemonDetailScreen(name);

  return (
    <BaseScreen style={style.screenStyle}>
      <TextRegular10>Fetching details for: {name}</TextRegular10>
      <TextRegular12>Name: {currentPokemon?.name}</TextRegular12>
      <TextRegular12>Weight: {currentPokemon?.weight}</TextRegular12>
    </BaseScreen>
  );
};

const style = StyleSheet.create({
  screenStyle: {
    gap: sizer(16),
    padding: SCREEN_PADDING,
  },
});
