import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {ScrollableScreen} from '../../containers/BaseScreen';
import {Strings} from '../../utils/strings';
import {DummyScreenWithScrollProps} from './DummyScreenWithScroll.types';
import {SCREEN_PADDING} from '../../utils/constants';

export const DummyScreenWithScroll = ({}: DummyScreenWithScrollProps) => {
  return (
    <ScrollableScreen style={style.screenStyle} scrollViewProps={{}}>
      <Text>{Strings.baseScrollScreen}</Text>
    </ScrollableScreen>
  );
};

const style = StyleSheet.create({
  screenStyle: {
    padding: SCREEN_PADDING,
  },
});
