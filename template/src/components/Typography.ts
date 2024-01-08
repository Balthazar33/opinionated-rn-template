// @ts-nocheck
import styled from 'styled-components/native';

import {sizer} from '../utils/metrics';
import {Fonts} from '../utils/constants';
import {Colors} from '../utils/colors';

interface ColorProps {
  color?: string;
}

// Regular text---------------------------------
export const TextRegular10 = styled.Text({
  fontFamily: Fonts.REGULAR,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(10),
});
export const TextRegular12 = styled.Text({
  fontFamily: Fonts.REGULAR,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(12),
});
export const TextRegular14 = styled.Text({
  fontFamily: Fonts.REGULAR,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(14),
});
export const TextRegular16 = styled.Text({
  fontFamily: Fonts.REGULAR,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(16),
});
//----------------------------------------------

// Bold text------------------------------------
export const TextBold10 = styled.Text({
  fontFamily: Fonts.BOLD,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(10),
});
export const TextBold12 = styled.Text({
  fontFamily: Fonts.BOLD,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(12),
});
export const TextBold14 = styled.Text({
  fontFamily: Fonts.BOLD,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(14),
});
export const TextBold16 = styled.Text({
  fontFamily: Fonts.BOLD,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(16),
});
//----------------------------------------------

// Medium text----------------------------------
export const TextMedium10 = styled.Text({
  fontFamily: Fonts.MEDIUM,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(10),
});
export const TextMedium12 = styled.Text({
  fontFamily: Fonts.MEDIUM,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(12),
});
export const TextMedium14 = styled.Text({
  fontFamily: Fonts.MEDIUM,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(14),
});
export const TextMedium16 = styled.Text({
  fontFamily: Fonts.MEDIUM,
  color: (props: ColorProps) => props.color || Colors.BLACK,
  fontSize: sizer(16),
});
//----------------------------------------------
