import React, {JSX, PropsWithChildren} from 'react';

import {render} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import type {AppStore, RootState} from '@redux/store.utils';
import configureAppStore from '@redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

// Render component with Providers for testing
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureAppStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
