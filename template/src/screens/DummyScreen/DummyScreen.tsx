import React, {useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';

import {TouchableRipple} from 'react-native-paper';

import BaseScreen from '../../containers/BaseScreen';
import {Strings} from '../../utils/strings';
import {sizer} from '../../utils/metrics';
import {SCREEN_PADDING} from '../../utils/constants';
import {StackScreens} from '../../navigation/types';
import {DummyScreenProps} from './DummyScreen.types';

export const DummyScreen = ({navigation}: DummyScreenProps) => {
  const handleBtnPress = useCallback(() => {
    navigation.navigate(StackScreens.ApiCallScreen);
  }, [navigation]);

  return (
    <BaseScreen style={style.screenStyle}>
      <Text>{Strings.baseScreen}</Text>
      <TouchableRipple onPress={handleBtnPress}>
        <Text>{Strings.toApiCallScreen}</Text>
      </TouchableRipple>
    </BaseScreen>
  );
};

const style = StyleSheet.create({
  screenStyle: {
    gap: sizer(16),
    padding: SCREEN_PADDING,
  },
});
