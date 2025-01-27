import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {TouchableRipple} from 'react-native-paper';

import {sizer} from '@utils/metrics';
import {Strings} from '@utils/strings';
import {TestIds} from '@utils/test-ids';
import {SCREEN_PADDING} from '@utils/constants';
import BaseScreen from '../../containers/BaseScreen';
import {useApiCallScreen} from './ApiCallScreen.hook';
import {ApiCallScreenProps} from './ApiCallScreen.types';
import {TextBold12, TextRegular12} from '@components/Typography';

export const ApiCallScreen = ({}: ApiCallScreenProps) => {
  const {all,handleBtnPress, renderItem} = useApiCallScreen();

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
