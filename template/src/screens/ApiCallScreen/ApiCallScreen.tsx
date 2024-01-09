import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import {TouchableRipple} from 'react-native-paper';

import BaseScreen from '../../containers/BaseScreen';
import {useAppDispatch, useAppSelector} from '../../appRedux/store.utils';
import {useGetAllPokemonMutation} from '../../services/testApi/pokemonApi';
import {getAllPokemon} from './ApiCallScreen.utils';
import {ApiCallScreenProps, PokemonItemType} from './ApiCallScreen.types';
import {sizer} from '../../utils/metrics';
import {SCREEN_PADDING} from '../../utils/constants';
import {Strings} from '../../utils/strings';
import {PokemonItem} from './PokemonItem';
import {TestIds} from '../../utils/test-ids';

export const ApiCallScreen = ({navigation}: ApiCallScreenProps) => {
  const dispatch = useAppDispatch();
  const {all}: {all: PokemonItemType[]} =
    useAppSelector(state => state.pokemon) || {};
  // extract api call from mutation
  const [pokemonApi] = useGetAllPokemonMutation();

  // getter & setter
  const handleBtnPress = () => {
    getAllPokemon({apiCall: pokemonApi, params: {}, dispatch});
  };

  return (
    <BaseScreen testID={TestIds.APICALL_SCREEN} style={style.screenStyle}>
      <Text>{Strings.apiCallScreen}</Text>
      <TouchableRipple onPress={handleBtnPress}>
        <Text>{Strings.getAllPokemon}</Text>
      </TouchableRipple>
      {/* List of pokemon */}
      <FlatList
        data={all}
        renderItem={({item}) => (
          <PokemonItem navigation={navigation} {...item} />
        )}
      />
    </BaseScreen>
  );
};

const style = StyleSheet.create({
  screenStyle: {
    gap: sizer(16),
    padding: SCREEN_PADDING,
  },
});
