import {setAll} from '../../appRedux/slices/pokemonSlice';
import {AppDispatch} from '../../appRedux/store.utils';
import {callApi} from '../../services/apiCaller';

interface ApiCallParameters {
  dispatch: AppDispatch;
  apiCall: (params: any) => any;
  params: any;
}

export const getAllPokemon = async ({
  dispatch,
  apiCall,
  params,
}: ApiCallParameters) => {
  try {
    const response = await callApi({
      apiCall,
      params,
      dispatch,
    });
    // modify as per requirement
    if (!response.data && !response.isSuccess) {
      // throw error
      throw new Error(response.errorMessage);
    } else {
      // process data
      const {results} = response?.data || {};
      dispatch(setAll(results));
    }
  } catch (error) {
    // handle error
    console.log('Error', error);
  }
};
