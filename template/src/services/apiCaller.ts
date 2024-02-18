import NetInfo from '@react-native-community/netinfo';

import {
  ApiError,
  ErrorType,
  ServerError,
  StatusCodes,
  CommonResponse,
  ApiCallWithErrorHandling,
} from './types';
import {Strings} from '../utils/strings';
import {store} from '../appRedux/store.utils';
import {resetAll} from '../appRedux/appActions';
import {
  isSuccessful,
  GENERIC_ERROR,
  NO_INTERNET_ERROR,
} from './apiCaller.utils';

export async function callApi({
  params,
  apiCall,
  dispatch,
}: ApiCallWithErrorHandling) {
  return NetInfo.fetch().then(async (state: any) => {
    if (state.isConnected) {
      const response = await apiCall(params)
        .unwrap() // unwrap api call
        .then((data: CommonResponse) => {
          const {status, message, code} = data;
          // if api call succeeds...
          if (isSuccessful(code, status)) {
            return {isSuccess: true, data};
          }
          // else, return error message if available
          return {
            isSuccess: false,
            data,
            errorMessage: message || Strings.genericError,
          };
        })
        .catch((error: ApiError | any) => {
          handleServerError({
            apiCall,
            dispatch,
            params,
            errorCode: error.status,
            error,
          });
          return GENERIC_ERROR;
        });
      return response;
    }
    return NO_INTERNET_ERROR;
  });
}

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
      callApi({apiCall, params, dispatch});
    }

    // log out user if status code is 401
    if (errorCode === StatusCodes.ERROR401) {
      try {
        // clear credentials or reset store
        store.dispatch(resetAll());
      } catch (e: any) {
        // empty
      }
    }
  } else if (
    error?.status?.toString().toLowerCase() === Strings.fetchError ||
    error?.errror
      ?.toString()
      .toLowerCase()
      .includes(Strings.networkRequestFailed)
  ) {
    // no internet
  } else {
    // generic error
  }
}
