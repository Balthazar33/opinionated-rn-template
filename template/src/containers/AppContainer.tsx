import React from 'react';

import AppNavigator from '../navigation/AppNavigator';
import {useAppSelector} from '@redux/store.utils';
import {Loader} from '../components';

export const AppContainer = ({}) => {
  const {loading} = useAppSelector(state => state.app);

  return (
    <>
      <AppNavigator />
      {loading && <Loader />}
    </>
  );
};
