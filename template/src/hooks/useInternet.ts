import {useNetInfo} from '@react-native-community/netinfo';

export const useInternet = () => {
  const {isInternetReachable, isConnected} = useNetInfo();
  const isNetAvailable = isInternetReachable && isConnected;
  return {isNetAvailable};
};
