import {AppDispatch} from '@redux/store.utils';

export interface ApiCallWithErrorHandling {
  apiCall: (params: any) => any;
  params: any;
  dispatch: AppDispatch;
}

export interface ApiCallResponse {
  data: null | any;
  error: {
    message?: string;
  };
}

interface Meta {
  headers?: any;
  status: number;
  statusText: string;
}

export interface CommonResponse {
  data: any;
  meta?: {
    response?: Meta | undefined;
  }; // API call meta data
}

export enum FetchErrorStatus {
  PARSING_ERROR = 'PARSING_ERROR',
}

export enum FetchErrorCodes {
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  INCORRECT_INPUT = 400,
  SERVER_ERROR = 500,
}

export interface ApiError {
  data?: any;
  originalStatus: FetchErrorCodes | number;
  status: FetchErrorStatus | string;
}

export interface ServerError extends ApiCallWithErrorHandling {
  error: any;
  errorCode?: ErrorType;
}

export enum StatusCodes {
  ERROR400 = 400,
  ERROR401 = 401,
  ERROR404 = 404,
  ERROR500 = 500,
  ERROR300 = 300,
  SUCCESS200 = 200,
  SUCCESS201 = 201,
}

export type ErrorType =
  | StatusCodes.ERROR400
  | StatusCodes.ERROR401
  | StatusCodes.ERROR404
  | StatusCodes.ERROR500;
