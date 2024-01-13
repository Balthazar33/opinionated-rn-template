jest.useFakeTimers();
import React from 'react';

import {setupServer} from 'msw/node';
import {http, HttpResponse, delay} from 'msw';
import {it, describe, expect} from '@jest/globals';
import '@testing-library/react-native/extend-expect';

import {ApiCallScreen} from '..';
import * as PokeApi from '../../services/testApi/pokemonApi';
import {renderWithProviders} from '../../utils/test-utils';
import {ApiCallScreenProps} from '../ApiCallScreen/ApiCallScreen.types';
import {BASE_URL} from '../../services/testApi/pokemonApi';
import {Endpoints} from '../../services/testApi/pokemonApi.endpoints';
import {TestIds} from '../../utils/test-ids';
import {fireEvent, waitFor, screen} from '@testing-library/react-native';

//Test Setup-----------------------------------------------------
const navigation: Partial<ApiCallScreenProps['navigation']> = {
  navigate: jest.fn,
};
const route: Partial<ApiCallScreenProps['route']> = {
  params: undefined,
};
export const handlers = [
  // Mocked API response
  http.get(`${BASE_URL}${Endpoints.ALL}`, async () => {
    await delay(150);
    return HttpResponse.json({
      results: [
        {
          name: 'bulbasaur',
          url: '',
        },
        {
          name: 'ivysaur',
          url: '',
        },
      ],
    });
  }),
];
const server = setupServer(...handlers);
//----------------------------------------------------------------
describe('ApiCallScreen', () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());
  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());
  // Disable API mocking after the tests are done.
  afterAll(done => {
    server.close();
    done();
  });

  it('renders correctly', () => {
    const elementTree = renderWithProviders(
      <ApiCallScreen
        route={route as ApiCallScreenProps['route']}
        navigation={navigation as ApiCallScreenProps['navigation']}
      />,
    ).toJSON();
    expect(elementTree).toMatchSnapshot();
  });

  it('should fetch the list of pokemons on pressing the "Get all pokemon" button', async () => {
    const getAllSpyFn = jest.spyOn(PokeApi, 'useGetAllPokemonMutation');
    renderWithProviders(
      <ApiCallScreen
        route={route as ApiCallScreenProps['route']}
        navigation={navigation as ApiCallScreenProps['navigation']}
      />,
    );
    const getAllPokemonBtn = screen.getByTestId(TestIds.GET_ALL_POKEMON_BTN);
    await waitFor(() => {
      fireEvent(getAllPokemonBtn, 'press');
    });
    expect(getAllSpyFn).toHaveBeenCalled();
    expect(await screen.findByText('bulbasaur')).toBeOnTheScreen();
    expect(await screen.findByText('ivysaur')).toBeOnTheScreen();
  });
});
