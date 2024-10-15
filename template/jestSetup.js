// https://chrisfrew.in/blog/a-production-ready-jest-setup-for-react-native-all-mocks/
// import '@testing-library/react-native/extend-expect';

import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';
import {NativeModules as RNNativeModules} from 'react-native';
import {jest} from '@jest/globals';
// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// react-native-device-info
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// react-native-netinfo
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

// react-native-bootsplash
jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockResolvedValue(),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: {source: 0},
      brand: {source: 0},
    }),
  };
});

//redux-persist
jest.mock('redux-persist', () => {
  return {
    ...jest.requireActual('redux-persist'),
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
jest.mock('redux-persist/integration/react', () => ({
  PersistGate: props => props.children,
}));

// react-native-reanimated
global.__reanimatedWorkletInit = () => {};
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

// react-native-keyboard-aware-scroll-view'
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = require('react-native').ScrollView;
  return {KeyboardAwareScrollView};
});

// @react-navigation/native
jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
  default: () => ({getInitialState: {then: jest.fn()}}),
  __esModule: true,
}));

// back handler
jest.mock('react-native/Libraries/Utilities/BackHandler', () =>
  require('react-native/Libraries/Utilities/__mocks__/BackHandler'),
);

// react-native-mmkv-storage
jest.mock('react-native-mmkv-storage', () => ({
  MMKVLoader: jest.fn().mockImplementation(() => {
    return {
      setAccessibleIOS: jest.fn().mockReturnThis(),
      withEncryption: () => ({
        initialize: () => ({
          getItem: async () => jest.fn(),
          setItem: async () => jest.fn(),
        }),
      }),
      initialize: () => ({
        getItem: async () => jest.fn(),
        setItem: async () => jest.fn(),
      }),
      withInstanceID: () => ({
        initialize: () => ({
          getItem: async () => jest.fn(),
          setItem: async () => jest.fn(),
        }),
      }),
    };
  }),
  IOSAccessibleStates: {
    WHEN_UNLOCKED: 'AccessibleWhenUnlocked',
    AFTER_FIRST_UNLOCK: 'AccessibleAfterFirstUnlock',
    ALWAYS: 'AccessibleAlways',
    WHEN_PASSCODE_SET_THIS_DEVICE_ONLY:
      'AccessibleWhenPasscodeSetThisDeviceOnly',
    WHEN_UNLOCKED_THIS_DEVICE_ONLY: 'AccessibleWhenUnlockedThisDeviceOnly',
    AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY:
      'AccessibleAfterFirstUnlockThisDeviceOnly',
    ALWAYS_THIS_DEVICE_ONLY: 'AccessibleAlwaysThisDeviceOnly',
  },
}));

RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};
RNNativeModules.RNGestureHandlerModule =
  RNNativeModules.RNGestureHandlerModule || {
    State: {BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END'},
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
  };
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
  forceTouchAvailable: false,
};
