import {Alert} from 'react-native';

import NetInfo from '@react-native-community/netinfo';

import {
  ApiError,
  ErrorType,
  ServerError,
  StatusCodes,
  CommonResponse,
  ApiCallResponse,
  ApiCallWithErrorHandling,
} from './types';
import {Strings} from '@utils/strings';
// import {store} from '@redux/store.utils';
// import {resetAll} from '@redux/appActions';
import {isNetworkError} from '@/utils/helper';
import {GENERIC_ERROR, NO_INTERNET_ERROR, didSucceed} from './apiCaller.utils';

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
            error,
            params,
            apiCall,
            dispatch,
            errorCode: error?.status,
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
  const alertOptions = [
    {text: Strings.ok, onPress: () => {}},
    {
      text: Strings.tryAgain,
      onPress: () => callApi({apiCall, params, dispatch}),
    },
  ];
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
      Alert.alert(Strings.error, title, alertOptions);
    }

    // log out user if status code is 401
    if (errorCode === StatusCodes.ERROR401) {
      try {
        // clear credentials or reset store
        // store.dispatch(resetAll());
        Alert.alert(Strings.error, title, alertOptions);
      } catch (e: any) {
        // empty
      }
    }
  } else if (isNetworkError(error)) {
    Alert.alert(Strings.error, NO_INTERNET_ERROR.error.message, alertOptions);
  } else {
    Alert.alert(Strings.error, Strings.genericError, alertOptions);
  }
}
