import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Endpoints} from './pokemonApi.endpoints';
import {FetchMethods} from '../constants';
import {CommonResponse} from '../types';
export const BASE_URL = 'https://pokeapi.co/api/v2/';

export interface GetAllPokemonQueryParams {
  limit?: number;
}

export const pokemonApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    // Get all pokemons
    getAllPokemon: builder.query<CommonResponse, GetAllPokemonQueryParams>({
      query: (params) => ({
        url: Endpoints.ALL,
        method: FetchMethods.GET,
        params: {
          ...params,
          limit: params?.limit ?? 10,
        },
      }),
      transformResponse: (response, meta, _) => ({data: response, meta}),
    }),
    // Get pokemon details by name
    getDetailsByName: builder.query({
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
  useLazyGetAllPokemonQuery,
  useLazyGetDetailsByNameQuery,
  useAddPokemonByNameMutation,
} = pokemonApi;
