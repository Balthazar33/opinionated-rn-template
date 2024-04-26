import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Endpoints} from './pokemonApi.endpoints';
import {FetchMethods} from '../constants';
export const BASE_URL = 'https://pokeapi.co/api/v2/';

export const pokemonApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    // Get all pokemons
    getAllPokemon: builder.mutation({
      query: () => ({
        url: Endpoints.ALL,
        method: FetchMethods.GET,
      }),
      transformResponse: (response, meta, _) => ({data: response, meta}),
    }),
    // Get pokemon details by name
    getDetailsByName: builder.mutation({
      query: ({name}) => ({
        url: `${Endpoints.ALL}${name}`,
        method: FetchMethods.GET,
      }),
      transformResponse: (response, meta, _) => ({data: response, meta}),
    }),
    // The endpoint for the following POST request does not exist and is added merely as an example
    addPokemonByName: builder.mutation({
      query: body => ({
        url: Endpoints.ADDNEW,
        method: FetchMethods.POST,
        body,
      }),
      transformResponse: (response, meta, _) => ({data: response, meta}),
    }),
  }),
});

export const {
  useGetAllPokemonMutation,
  useGetDetailsByNameMutation,
  useAddPokemonByNameMutation,
} = pokemonApi;
