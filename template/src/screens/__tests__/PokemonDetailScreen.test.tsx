jest.useFakeTimers();
import React from 'react';

import {setupServer} from 'msw/node';
import {http, HttpResponse, delay} from 'msw';
import {it, describe, expect} from '@jest/globals';
import '@testing-library/react-native/extend-expect';
import {screen, waitFor} from '@testing-library/react-native';

import {PokemonDetailScreen} from '..';
import {renderWithProviders} from '@utils/test-utils';
import {BASE_URL} from '../../services/testApi/pokemonApi';
import {PokemonDetailScreenProps} from '../PokemonDetailScreen/PokemonDetailScreen.types';

//Test Setup------------------------------------------------------------
const TEST_POKEMON = 'ivysaur';
const navigation: Partial<PokemonDetailScreenProps['navigation']> = {
  navigate: jest.fn,
};
const route: Partial<PokemonDetailScreenProps['route']> = {
  params: {name: TEST_POKEMON},
};
export const handlers = [
  // Mocked API response
  http.get(`${BASE_URL}pokemon/${TEST_POKEMON}`, async () => {
    await delay(150);
    return HttpResponse.json({
      name: TEST_POKEMON,
      weight: 130,
    });
  }),
];
const server = setupServer(...handlers);
//---------------------------------------------------------------------

describe('PokemonDetailScreen', () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());
  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());
  // Disable API mocking after the tests are done.
  afterAll(done => {
    server.close();
    done();
  });
  it('renders correctly', async () => {
    await waitFor(() => {
      const elementTree = renderWithProviders(
        <PokemonDetailScreen
          route={route as PokemonDetailScreenProps['route']}
          navigation={navigation as PokemonDetailScreenProps['navigation']}
        />,
      ).toJSON();
      expect(elementTree).toMatchSnapshot();
    });
  });

  it('should display the pokemon name received from the previous screen', async () => {
    await waitFor(() => {
      const {getByText} = renderWithProviders(
        <PokemonDetailScreen
          route={route as PokemonDetailScreenProps['route']}
          navigation={navigation as PokemonDetailScreenProps['navigation']}
        />,
      );
      expect(
        getByText(`Fetching details for: ${TEST_POKEMON}`),
      ).toBeOnTheScreen();
    });
  });

  it('should call pokemon details API when the screen is mounted', async () => {
    await waitFor(() =>
      renderWithProviders(
        <PokemonDetailScreen
          route={route as PokemonDetailScreenProps['route']}
          navigation={navigation as PokemonDetailScreenProps['navigation']}
        />,
      ),
    );
    expect(await screen.findByText('Weight: 130')).toBeOnTheScreen();
  });
});
