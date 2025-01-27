import React from 'react';
import {StyleSheet} from 'react-native';

import {TouchableRipple} from 'react-native-paper';

import {sizer} from '@utils/metrics';
import {StackScreens} from '@/navigation/types';
import {TextRegular14} from '@components/Typography';
import {ApiCallScreenProps} from './ApiCallScreen.types';
import {useNavigation} from '@react-navigation/native';

interface PokemonItemProps {
  name: string;
}

export const PokemonItem = ({name}: PokemonItemProps) => {
  const {navigation} = useNavigation<ApiCallScreenProps>();
  const handleNamePress = () =>
    navigation.navigate(StackScreens.PokemonDetailScreen, {name});

  return (
    <TouchableRipple style={style.wrapper} onPress={handleNamePress}>
      <TextRegular14>{name}</TextRegular14>
    </TouchableRipple>
  );
};

const style = StyleSheet.create({
  wrapper: {
    padding: sizer(12),
  },
});
