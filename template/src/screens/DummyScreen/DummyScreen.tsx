import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {TouchableRipple} from 'react-native-paper';

import {sizer} from '../../utils/metrics';
import {Strings} from '../../utils/strings';
import {TestIds} from '../../utils/test-ids';
import {SCREEN_PADDING} from '../../utils/constants';
import {StackScreens} from '../../navigation/types';
import {DummyScreenProps} from './DummyScreen.types';
import BaseScreen from '../../containers/BaseScreen';
import {TextRegular12, TextRegular14} from '../../components/Typography';

export const DummyScreen = ({navigation}: DummyScreenProps) => {
  const [showError, setShowError] = useState(false);

  const handleBtnPress = useCallback(() => {
    navigation.navigate(StackScreens.ApiCallScreen);
  }, [navigation]);

  useEffect(() => {
    return () => {
      setShowError(false);
    };
  }, []);

  const throwError = useCallback(() => {
    setShowError(true);
  }, []);

  if (showError) {
    throw new Error('This is not a drill!');
  }
  return (
    <BaseScreen testID={TestIds.DUMMYSCREEN} style={style.screenStyle}>
      <TextRegular12> {Strings.baseScreen}</TextRegular12>
      <TouchableRipple
        onPress={handleBtnPress}
        style={style.buttonStyle}
        testID={TestIds.TO_API_SCREEN_BTN}>
        <TextRegular14>{Strings.toApiCallScreen}</TextRegular14>
      </TouchableRipple>
      <TouchableRipple onPress={throwError} style={style.buttonStyle}>
        <TextRegular14>{Strings.throwError}</TextRegular14>
      </TouchableRipple>
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
