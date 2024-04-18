import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {Colors, withOpacity} from '@utils/colors';
import {TestIds} from '@utils/test-ids';

interface LoaderProps {
  size?: 'small' | 'large' | number;
  color?: string;
}

export const Loader = ({size, color}: LoaderProps) => {
  const style = StyleSheet.create({
    overlay: {
      backgroundColor: withOpacity(Colors.BLACK, 75),
    },
  });

  return (
    <View style={[StyleSheet.absoluteFill, style.overlay]}>
      <ActivityIndicator
        testID={TestIds.APP_ACTIVITY_INDICATOR}
        style={StyleSheet.absoluteFill}
        animating
        color={color || Colors.WHITE}
        size={size || 'large'}
      />
    </View>
  );
};
