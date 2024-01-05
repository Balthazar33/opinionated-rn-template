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

// react-redux
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn().mockImplementation(() => ({})),
    useDispatch: () => jest.fn(),
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

// Additional mocks for future use

// react-native-blob-util
// jest.mock('react-native-blob-util', () => {
//   return {getConstants: () => {}, polyfill: () => {}};
// });

// react-native-async-storage
// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
// navigation
// react-native-gifted-charts
// jest.mock('react-native-gifted-charts', () => {
//   return {
//     __esModule: true,
//     LineChart: () => <></>,
//     default: () => {
//       return <></>;
//     },
//   };
// });

// react-native-vector-icons mocks
// jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
// jest.mock('react-native-vector-icons/Entypo', () => 'Icon');
// jest.mock('react-native-vector-icons/Octicons', () => 'Icon');
// jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');
// jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
// jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');
// jest.mock('react-native-vector-icons/Feather', () => 'Icon');
// jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon');
// jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
// jest.mock('react-native-vector-icons/EvilIcons', () => 'Icon');

// react-native-simple-toast
// jest.mock('react-native-simple-toast', () => ({
//   SHORT: jest.fn(),
// }));

// react-native-webview
// jest.mock('react-native-webview', () => {
//   const {View} = require('react-native');
//   return {
//     WebView: View,
//   };
// });

// react-native-vector-icons
// RNNativeModules.RNVectorIconsManager = {
//   getImageForFont: function getImageForFont(
//     fontFamily,
//     glyph,
//     fontSize,
//     color,
//     callback,
//   ) {
//     return callback(null, require('./src/assets/cash.jpg'));
//   },
//   loadFontWithFileName: jest.fn(),
// };

// react-native-share
// jest.mock('react-native-share', () => ({
//   default: jest.fn(),
// }));

// react-native-fs
// jest.mock('react-native-fs', () => {
//   return {
//     mkdir: jest.fn(),
//     moveFile: jest.fn(),
//     copyFile: jest.fn(),
//     pathForBundle: jest.fn(),
//     pathForGroup: jest.fn(),
//     getFSInfo: jest.fn(),
//     getAllExternalFilesDirs: jest.fn(),
//     unlink: jest.fn(),
//     exists: jest.fn(),
//     stopDownload: jest.fn(),
//     resumeDownload: jest.fn(),
//     isResumable: jest.fn(),
//     stopUpload: jest.fn(),
//     completeHandlerIOS: jest.fn(),
//     readDir: jest.fn(),
//     readDirAssets: jest.fn(),
//     existsAssets: jest.fn(),
//     readdir: jest.fn(),
//     setReadable: jest.fn(),
//     stat: jest.fn(),
//     readFile: jest.fn(),
//     read: jest.fn(),
//     readFileAssets: jest.fn(),
//     hash: jest.fn(),
//     copyFileAssets: jest.fn(),
//     copyFileAssetsIOS: jest.fn(),
//     copyAssetsVideoIOS: jest.fn(),
//     writeFile: jest.fn(),
//     appendFile: jest.fn(),
//     write: jest.fn(),
//     downloadFile: jest.fn(),
//     uploadFiles: jest.fn(),
//     touch: jest.fn(),
//     MainBundlePath: jest.fn(),
//     CachesDirectoryPath: jest.fn(),
//     DocumentDirectoryPath: jest.fn(),
//     ExternalDirectoryPath: jest.fn(),
//     ExternalStorageDirectoryPath: jest.fn(),
//     TemporaryDirectoryPath: jest.fn(),
//     LibraryDirectoryPath: jest.fn(),
//     PicturesDirectoryPath: jest.fn(),
//   };
// });
