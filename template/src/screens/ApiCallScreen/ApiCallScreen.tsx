import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {TouchableRipple} from 'react-native-paper';

import BaseScreen from '../../containers/BaseScreen';
import {useAppDispatch, useAppSelector} from '@redux/store.utils';
import {GetAllPokemonQueryParams, useLazyGetAllPokemonQuery} from '@services/testApi/pokemonApi';
import {getAllPokemon} from './ApiCallScreen.utils';
import {ApiCallScreenProps, PokemonItemType} from './ApiCallScreen.types';
import {sizer} from '@utils/metrics';
import {SCREEN_PADDING} from '@utils/constants';
import {Strings} from '@utils/strings';
import {PokemonItem} from './PokemonItem';
import {TestIds} from '@utils/test-ids';
import {TextBold12, TextRegular12} from '@components/Typography';

export const ApiCallScreen = ({navigation}: ApiCallScreenProps) => {
  const dispatch = useAppDispatch();
  const {all}: {all: PokemonItemType[]} =
    useAppSelector(state => state.pokemon) || {};
  const [trigger] = useLazyGetAllPokemonQuery();

  // getter & setter
  const handleBtnPress = async () => {
    getAllPokemon<GetAllPokemonQueryParams>({dispatch, apiCall: trigger, params: {limit: 5}});
  };

  const renderItem = useCallback(
    ({item}: {item: PokemonItemType}) => (
      <PokemonItem navigation={navigation} {...item} />
    ),
    [navigation],
  );

  return (
    <BaseScreen testID={TestIds.APICALL_SCREEN} style={style.screenStyle}>
      <TextRegular12>{Strings.apiCallScreen}</TextRegular12>
      <TouchableRipple
        onPress={handleBtnPress}
        style={style.buttonStyle}
        testID={TestIds.GET_ALL_POKEMON_BTN}>
        <TextBold12>{Strings.getAllPokemon}</TextBold12>
      </TouchableRipple>
      {/* List of pokemon */}
      <FlatList data={all} renderItem={renderItem} />
    </BaseScreen>
  );
};

const style = StyleSheet.create({
  screenStyle: {
    gap: sizer(16),
    padding: SCREEN_PADDING,
  },
  buttonStyle: {
    padding: sizer(16),
  },
});
