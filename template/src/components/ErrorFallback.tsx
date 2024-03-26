import React from 'react';
import {View} from 'react-native';
import {TextRegular12, TextRegular14} from './Typography';
import {Button} from 'react-native-paper';
import {Strings} from '../utils/strings';

export const ErrorFallback = ({resetError}: {resetError: () => void}) => {
  return (
    <View>
      <TextRegular14>{Strings.whoops}</TextRegular14>
      <TextRegular12>{Strings.genericError}</TextRegular12>
      <Button onPress={resetError}>
        <TextRegular12>{Strings.tryAgain}</TextRegular12>
      </Button>
    </View>
  );
};
