import {PixelRatio, Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const SIZE_CACHE = new Map<number, number>();
const BASE_SCREEN_WIDTH = 375;
/**
 * Returns device-adjusted size for the given input
 * @param {number} input - input size
 * @returns {number}
 * References:
 * 1. https://medium.com/@HelloMoto69/react-native-responsive-scaling-font-dimensions-pixels-5dcccd8f7124#:~:text=By%20dividing%20the%20device's%20screen,screen%20size%20and%20aspect%20ratio.
 * 2. https://reactnative.dev/docs/pixelratio#roundtonearestpixel
 */
export const sizer = (input: number): number => {
  // Cache frequently used sizes to avoid recomputation on every call.
  if (!SIZE_CACHE.has(input)) {
    SIZE_CACHE.set(input, PixelRatio.roundToNearestPixel((input * screenWidth) / BASE_SCREEN_WIDTH));
  }
  return SIZE_CACHE.get(input) ?? 1;
};

export {screenHeight, screenWidth};
