declare module 'react-native-config' {
  export interface NativeConfig {
    DUMMY_API_KEY?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
