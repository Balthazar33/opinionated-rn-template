import React from 'react';

import {it, describe, expect} from '@jest/globals';
import '@testing-library/react-native/extend-expect';

import {PokemonDetailScreen} from '..';
import {renderWithProviders} from '../../utils/test-utils';
import {PokemonDetailScreenProps} from '../PokemonDetailScreen/PokemonDetailScreen.types';

const navigation: Partial<PokemonDetailScreenProps['navigation']> = {
  navigate: jest.fn,
};
const route: Partial<PokemonDetailScreenProps['route']> = {
  params: {name: 'bulbasaur'},
};

describe('PokemonDetailScreen', () => {
  it('renders correctly', () => {
    const elementTree = renderWithProviders(
      <PokemonDetailScreen
        route={route as PokemonDetailScreenProps['route']}
        navigation={navigation as PokemonDetailScreenProps['navigation']}
      />,
    ).toJSON();
    expect(elementTree).toMatchSnapshot();
  });

  it('should display the pokemon name received from the previous screen', () => {
    const {getByText} = renderWithProviders(
      <PokemonDetailScreen
        route={route as PokemonDetailScreenProps['route']}
        navigation={navigation as PokemonDetailScreenProps['navigation']}
      />,
    );
    expect(getByText('bulbasaur', {exact: false})).toBeOnTheScreen();
  });
});
