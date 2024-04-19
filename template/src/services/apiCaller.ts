import NetInfo from '@react-native-community/netinfo';

import {
  ApiError,
  ErrorType,
  ServerError,
  StatusCodes,
  CommonResponse,
  ApiCallWithErrorHandling,
  ApiCallResponse,
} from './types';
import {Strings} from '@utils/strings';
// import {store} from '@redux/store.utils';
// import {resetAll} from '@redux/appActions';
import {GENERIC_ERROR, NO_INTERNET_ERROR, didSucceed} from './apiCaller.utils';
import {Alert} from 'react-native';
import {isNetworkError} from '@/utils/helper';

export const callApi: (
  args: ApiCallWithErrorHandling,
) => Promise<ApiCallResponse> = async ({
  params,
  apiCall,
  dispatch,
}: ApiCallWithErrorHandling) => {
  return NetInfo.fetch().then(async (state: any) => {
    if (state.isConnected) {
      const response = await apiCall(params)
        .unwrap() // unwrap api call
        .then((result: CommonResponse) => {
          const {data, meta} = result;
          // if api call succeeds...
          if (didSucceed(meta?.response?.status)) {
            return {error: false, data};
          }
          // else, return error
          return {
            error: {
              message: meta?.response?.statusText || Strings.genericError,
            },
            data: null,
          };
        })
        .catch((error: ApiError | any) => {
          handleServerError({
            apiCall,
            dispatch,
            params,
            errorCode: error?.status,
            error,
          });
          return GENERIC_ERROR;
        });
      return response;
    }
    return NO_INTERNET_ERROR;
  });
};

export async function handleServerError({
  error,
  params,
  apiCall,
  dispatch,
  errorCode,
}: ServerError) {
  if (errorCode) {
    const ErrorCodeTitle: Record<ErrorType, string> = {
      400: Strings.error400,
      401: Strings.error401,
      404: Strings.error404,
      500: Strings.error500,
    };
    const title = ErrorCodeTitle[errorCode];
    if (
      title &&
      (errorCode === StatusCodes.ERROR400 || errorCode === StatusCodes.ERROR404)
    ) {
      // handle error or retry conditionally
      Alert.alert('Error', title, [
        {text: 'OK', onPress: () => {}},
        {text: 'Retry', onPress: () => callApi({apiCall, params, dispatch})},
      ]);
    }

    // log out user if status code is 401
    if (errorCode === StatusCodes.ERROR401) {
      try {
        // clear credentials or reset store
        // store.dispatch(resetAll());
        Alert.alert('Error', title, [
          {text: 'OK', onPress: () => {}},
          {text: 'Retry', onPress: () => callApi({apiCall, params, dispatch})},
        ]);
      } catch (e: any) {
        // empty
      }
    }
  } else if (isNetworkError(error)) {
    Alert.alert('Error', NO_INTERNET_ERROR.error.message, [
      {text: 'OK', onPress: () => {}},
      {text: 'Retry', onPress: () => callApi({apiCall, params, dispatch})},
    ]);
  } else {
    Alert.alert('Error', Strings.genericError, [
      {text: 'OK', onPress: () => {}},
      {text: 'Retry', onPress: () => callApi({apiCall, params, dispatch})},
    ]);
  }
}
