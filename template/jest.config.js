module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'svg'],
  setupFiles: ['<rootDir>/jestSetup.js'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'babel-jest',
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.(jsx|tsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/ios',
    '<rootDir>/android',
  ],
  cacheDirectory: '.jest/cache',
  verbose: true,
  // common libraries, remove unused ones
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-native-community' +
      '|@react-navigation' +
      '|variables/.*' +
      '|react-navigation-tabs' +
      '|react-native-splash-screen' +
      '|react-native-screens' +
      '|react-native-vector-icons' +
      '|react-native-reanimated' +
      '|react-native-iphone-x-helper' +
      '|react-native-actions-sheet' +
      '|react-native-share' +
      '|@react-native-firebase/storage' +
      '|@react-native-firebase/app' +
      '|react-native-dropdown-picker' +
      '|react-native-date-picker' +
      '|react-native-file-viewer' +
      '|react-native-blob-util' +
      '|react-native-push-notification' +
      '|@rneui/themed' +
      '|@rneui/base' +
      '|react-native-ratings' +
      '|react-native-webview' +
      '|react-native-gifted-charts' +
      '|react-native-linear-gradient' +
      '|@react-native-async-storage/async-storage' +
      '|@react-native-community/netinfo' +
      '|react-native-keyboard-aware-scroll-view' +
      '|react-native-mmkv-storage' +
      ')/)',
  ],
};
