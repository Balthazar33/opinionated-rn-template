import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {sizer} from '@utils/metrics';
import {SCREEN_PADDING} from '@utils/constants';
import BaseScreen from '@/containers/BaseScreen';
import {useGetInfinitePokemonInfiniteQuery} from '@/services/testApi/pokemonApi';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList, StackScreens} from '@/navigation/types';
import {TouchableRipple} from 'react-native-paper';
import {TextRegular14} from '@/components/Typography';
import {PokemonItemType} from './ApiCallScreen.types';

export type InfiniteScreenProps = StackScreenProps<
  RootStackParamList,
  StackScreens.InfiniteQueryScreen
>;

export const InfiniteQueryScreen = ({}: InfiniteScreenProps) => {
  const {
    data,
    fetchNextPage,
    // isFetchingNextPage,
  } = useGetInfinitePokemonInfiniteQuery(
    {limit: 50},
    {
      refetchOnMountOrArgChange: false,
    },
  );

  const renderItem = useCallback(({item}: {item: PokemonItemType}) => {
    const {name} = item;
    return (
      <TouchableRipple style={style.wrapper} onPress={() => {}}>
        <TextRegular14>{name}</TextRegular14>
      </TouchableRipple>
    );
  }, []);

  const allResults = data?.pages.flatMap(page => page.results) ?? [];
  return (
    <BaseScreen style={style.screenStyle}>
      <FlatList
        data={allResults}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
      />
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
  wrapper: {
    padding: sizer(12),
  },
});
