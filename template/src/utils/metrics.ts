import {PixelRatio, Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

/**
 * Returns device-adjusted size for the given input
 * @param {number} input - input size
 * @returns responsive size
 * References:
 * 1. https://medium.com/@HelloMoto69/react-native-responsive-scaling-font-dimensions-pixels-5dcccd8f7124#:~:text=By%20dividing%20the%20device's%20screen,screen%20size%20and%20aspect%20ratio.
 * 2. https://reactnative.dev/docs/pixelratio#roundtonearestpixel
 */
export const sizer = (input: number) => {
  return PixelRatio.roundToNearestPixel((input * screenWidth) / 375);
};

export {screenHeight, screenWidth};
