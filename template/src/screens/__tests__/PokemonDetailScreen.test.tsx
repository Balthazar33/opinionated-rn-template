import React from 'react';

import {it, describe, expect} from '@jest/globals';
import '@testing-library/react-native/extend-expect';

import {PokemonDetailScreen} from '..';

import * as PokeApi from '../../services/testApi/pokemonApi';
import {renderWithProviders} from '../../utils/test-utils';
import {PokemonDetailScreenProps} from '../PokemonDetailScreen/PokemonDetailScreen.types';
import {act} from '@testing-library/react-native';

const navigation: Partial<PokemonDetailScreenProps['navigation']> = {
  navigate: jest.fn,
};
const route: Partial<PokemonDetailScreenProps['route']> = {
  params: {name: 'bulbasaur'},
};

describe('PokemonDetailScreen', () => {
  afterAll(done => done());
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

  it('should call pokemon details API when the screen is mounted', async () => {
    const spyFn = jest.spyOn(PokeApi, 'useGetDetailsByNameMutation');
    const screen = renderWithProviders(
      <PokemonDetailScreen
        route={route as PokemonDetailScreenProps['route']}
        navigation={navigation as PokemonDetailScreenProps['navigation']}
      />,
    );
    await act(async () => {
      expect(spyFn).toHaveBeenCalled();
      await screen.findByText('69', {exact: false});
    });
  });
});
