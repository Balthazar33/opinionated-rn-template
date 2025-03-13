import React from 'react';
import {StyleSheet} from 'react-native';

import {TouchableRipple} from 'react-native-paper';

import {sizer} from '@utils/metrics';
import {RootStackParamList, StackScreens} from '@/navigation/types';
import {TextRegular14} from '@components/Typography';
import {StackNavigationProp} from '@react-navigation/stack';

interface PokemonItemProps {
  name: string;
  navigation: StackNavigationProp<
    RootStackParamList,
    StackScreens.ApiCallScreen,
    undefined
  >;
}

export const PokemonItem = ({name, navigation}: PokemonItemProps) => {
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
