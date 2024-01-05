import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Strings} from '../utils/strings';
import {Colors, withOpacity} from '../utils/colors';
import {sizer} from '../utils/metrics';
import {TestIds} from '../utils/testIds';

export const NoInternet = ({message}: {message?: string}) => {
  return (
    <View testID={TestIds.NO_INTERNET} style={style.viewStyle}>
      <Text style={style.textStyle}>{message || Strings.noInternet}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    color: Colors.BLACK,
    textAlign: 'center',
  },
  viewStyle: {
    padding: sizer(12),
    backgroundColor: withOpacity(Colors.BLACK, 15),
  },
});
