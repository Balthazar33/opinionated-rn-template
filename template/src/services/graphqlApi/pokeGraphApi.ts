import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {FetchMethods} from '../constants';
import {getAllPokemon, getDetails} from './queries';
export const BASE_URL = 'https://graphql-pokeapi.graphcdn.app/';

export const pokeGraphApi = createApi({
  reducerPath: 'pokeGraphApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    // Get all pokemon
    getAllPokemon: builder.mutation({
      query: ({count}) => ({
        url: '',
        body: JSON.stringify({
          query: getAllPokemon,
          variables: {
            limit: count ?? 2,
            offset: 1,
          },
        }),
        method: FetchMethods.POST,
        headers: {'Content-Type': 'application/json'},
      }),
      transformResponse: (response, meta, _) => ({data: response, meta}),
    }),
    // Get pokemon details by name
    getDetailsByName: builder.mutation({
      query: ({name}) => ({
        url: '',
        body: JSON.stringify({
          query: getDetails,
          variables: {name},
        }),
        method: FetchMethods.POST,
        headers: {'Content-Type': 'application/json'},
      }),
      transformResponse: (response, meta, _) => ({data: response, meta}),
    }),
  }),
});

export const {useGetAllPokemonMutation, useGetDetailsByNameMutation} =
  pokeGraphApi;
