import {Platform} from 'react-native';
import {Strings} from './strings';

export const isAndroid = Platform.OS === 'android';

// Determine if the error is network-related
export const isNetworkError = (error: any) => {
  return (
    error?.status?.toString().toLowerCase() === Strings.fetchError ||
    error?.errror
      ?.toString()
      .toLowerCase()
      .includes(Strings.networkRequestFailed)
  );
};
