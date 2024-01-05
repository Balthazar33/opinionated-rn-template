import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';

import BaseScreen from '../../containers/BaseScreen';
import {sizer} from '../../utils/metrics';
import {SCREEN_PADDING} from '../../utils/constants';
import {useGetDetailsByNameMutation} from '../../services/testApi/pokemonApi';
import {useAppDispatch, useAppSelector} from '../../appRedux/store.utils';
import {getDetails} from './PokemonDetailScreen.utils';
import {clearCurrent} from '../../appRedux/slices/pokemonSlice';
import {PokemonDetailScreenProps} from './PokemonDetailScreen.types';

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
      <Text>Name: {name}</Text>
      <Text>Weight: {currentPokemon?.weight}</Text>
    </BaseScreen>
  );
};

const style = StyleSheet.create({
  screenStyle: {
    gap: sizer(16),
    padding: SCREEN_PADDING,
  },
});
