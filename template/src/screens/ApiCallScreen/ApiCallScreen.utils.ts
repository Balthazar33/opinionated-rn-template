import {setAll} from '@redux/slices/pokemonSlice';
import {AppDispatch} from '@redux/store.utils';
import {callApi} from '@services/apiCaller';
import {PokemonItemType} from './ApiCallScreen.types';

interface ApiCallParameters {
  dispatch: AppDispatch;
  apiCall: (params: any) => any;
  params: any;
}

interface PokemonResponse {
  results: PokemonItemType[];
}

export const getAllPokemon = async ({
  dispatch,
  apiCall,
  params,
}: ApiCallParameters) => {
  try {
    const response = await callApi({
      params,
      apiCall,
      dispatch,
    });
    // modify as per requirement
    if (response.error) {
      // throw error
      throw new Error(response.error.message);
    } else {
      // process data
      const responseData = response.data as PokemonResponse;
      dispatch(setAll(responseData?.results || []));
    }
  } catch (error) {
    // handle error
    console.log('Error', error);
  }
};
