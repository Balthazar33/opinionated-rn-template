import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import BaseScreen from '../../containers/BaseScreen';
import {sizer} from '@utils/metrics';
import {SCREEN_PADDING} from '@utils/constants';
import {useGetDetailsByNameMutation} from '../../services/testApi/pokemonApi';
import {useAppDispatch, useAppSelector} from '@redux/store.utils';
import {getDetails} from './PokemonDetailScreen.utils';
import {clearCurrent} from '@redux/slices/pokemonSlice';
import {PokemonDetailScreenProps} from './PokemonDetailScreen.types';
import {TextRegular10, TextRegular12} from '@components/Typography';

export const PokemonDetailScreen = ({route}: PokemonDetailScreenProps) => {
  const {name} = route?.params || {};
  const [pokemonDetails] = useGetDetailsByNameMutation();
  const {currentPokemon} = useAppSelector(state => state.pokemon) || {};
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (name) {
      getDetails({apiCall: pokemonDetails, params: {name}, dispatch});
    }

    return () => {
      dispatch(clearCurrent());
    };
  }, [name, dispatch, pokemonDetails]);

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
