import {Strings} from '@utils/strings';
import {StatusCodes} from './types';

// verify if api cal was successful
export const didSucceed = (status: StatusCodes | undefined) => {
  return status === StatusCodes.SUCCESS200 || status === StatusCodes.SUCCESS201;
};

export const GENERIC_ERROR = {
  error: {message: Strings.genericError},
  data: null,
};

export const NO_INTERNET_ERROR = {
  error: {message: Strings.noInternet},
  data: null,
};
