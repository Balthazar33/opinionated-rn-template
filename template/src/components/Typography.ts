import styled from '@emotion/native';

import {sizer} from '@utils/metrics';
import {Fonts} from '@utils/constants';
import {Colors} from '@utils/colors';

interface ColorProps {
  color?: string;
}

const getColor = ({color}: ColorProps) => (color ?? Colors.BLACK);

// Regular text--------------------------------------
export const TextRegular10 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(10),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
export const TextRegular12 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(12),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
export const TextRegular14 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(14),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
export const TextRegular16 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(16),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
//--------------------------------------------------

// Bold text----------------------------------------
export const TextBold10 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(10),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
export const TextBold12 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(10),
    fontFamily:Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
export const TextBold14 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(14),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
export const TextBold16 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(16),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
//---------------------------------------------------

// Medium text---------------------------------------
export const TextMedium10 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(12),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
export const TextMedium12 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(12),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
export const TextMedium14 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(14),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
export const TextMedium16 = styled.Text<ColorProps>(props => {
  return {
    fontSize: sizer(16),
    fontFamily: Fonts.REGULAR,
    includeFontPadding: false,
    color: getColor(props),
  };
});
//--------------------------------------------------
