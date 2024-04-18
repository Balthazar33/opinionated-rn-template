import {setPokemonDetails} from '@redux/slices/pokemonSlice';
import {AppDispatch} from '@redux/store.utils';
import {callApi} from '@services/apiCaller';

/**
 * Fetch & set pokemon details
 */
export const getDetails = async ({
  dispatch,
  apiCall,
  params,
}: {
  dispatch: AppDispatch;
  apiCall: (params: any) => any;
  params: any;
}) => {
  try {
    const response = await callApi({
      apiCall,
      params,
      dispatch,
    });
    if (!response.data && !response.isSuccess) {
      // throw error
      throw new Error(response.errorMessage);
    } else {
      // process data
      dispatch(setPokemonDetails(response.data));
    }
  } catch (error) {
    // handle error
    console.log('Error', error);
  }
};
