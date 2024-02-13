import {Strings} from '../utils/strings';
import {StatusCodes} from './types';

// verify if api cal was successful
export const isSuccessful = (code: StatusCodes | undefined, status: number) => {
  return (
    status === 1 ||
    code === StatusCodes.SUCCESS200 ||
    code === StatusCodes.SUCCESS201
  );
};

export const GENERIC_ERROR = {
  isSuccess: false,
  data: null,
  errorMessage: Strings.genericError,
};

export const NO_INTERNET_ERROR = {
  isSuccess: false,
  data: null,
  errorMessage: Strings.noInternet,
};
