import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {TouchableRipple} from 'react-native-paper';
import {sizer} from '../../utils/metrics';
import {ApiCallScreenProps} from './ApiCallScreen.types';
import {StackScreens} from '../../navigation/types';

interface PokemonItemProps {
  name: string;
  navigation: ApiCallScreenProps['navigation'];
}

export const PokemonItem = ({name, navigation}: PokemonItemProps) => {
  const handleNamePress = () =>
    navigation.navigate(StackScreens.PokemonDetailScreen, {name});

  return (
    <TouchableRipple style={style.wrapper} onPress={handleNamePress}>
      <Text>{name}</Text>
    </TouchableRipple>
  );
};

const style = StyleSheet.create({
  wrapper: {
    padding: sizer(12),
  },
});
