import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button} from 'react-native-paper';

import {Colors} from '@/utils/colors';
import {sizer} from '@/utils/metrics';
import {Strings} from '@utils/strings';
import BaseScreen from '@/containers/BaseScreen';
import {TextMedium16, TextRegular12, TextRegular14} from './Typography';

export const ErrorFallback = ({resetError}: {resetError: () => void}) => {
  return (
    <BaseScreen style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <TextMedium16 style={styles.textStyle}>{Strings.whoops}</TextMedium16>
          <TextRegular14 style={styles.textStyle}>
            {Strings.genericError}
          </TextRegular14>
        </View>
        <Button buttonColor={Colors.WHITE} onPress={resetError}>
          <TextRegular12 color={Colors.BLACK}>{Strings.tryAgain}</TextRegular12>
        </Button>
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizer(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.WHITE,
    textAlign: 'center',
  },
  textContainer: {
    marginBottom: sizer(16),
  },
});
