import React, {useCallback} from 'react';

import {PokemonItem} from './PokemonItem';
import {getAllPokemon} from './ApiCallScreen.utils';
import {useAppDispatch, useAppSelector} from '@/appRedux/store.utils';
import {ApiCallScreenProps, PokemonItemType} from './ApiCallScreen.types';
import {GetAllPokemonQueryParams, useLazyGetAllPokemonQuery} from '@/services/testApi/pokemonApi';

export const useApiCallScreen = (navigation: ApiCallScreenProps['navigation']) => {
  const dispatch = useAppDispatch();
  const [trigger] = useLazyGetAllPokemonQuery();
  const {all}: {all: PokemonItemType[]} = useAppSelector(state => state.pokemon) || {};

  const renderItem = useCallback(
    ({item}: {item: PokemonItemType}) => (
      <PokemonItem navigation={navigation} {...item} />
    ),
    [navigation],
  );

  const handleBtnPress = async () => {
    getAllPokemon<GetAllPokemonQueryParams>({dispatch, apiCall: trigger, params: {limit: 5}});
  };


  return {dispatch, all, trigger, renderItem, handleBtnPress};
};


