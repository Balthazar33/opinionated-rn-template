import React, {PropsWithChildren} from 'react';

import {render} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import type {AppStore, RootState} from '@redux/store.utils';
// As a basic setup, import your same slice reducers
import configureAppStore from '@redux/store';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

// Render component with Providers for testing
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureAppStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
