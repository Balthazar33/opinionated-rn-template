import styled from 'styled-components/native';

import {sizer} from '../utils/metrics';
import {Fonts} from '../utils/constants';
import {Colors} from '../utils/colors';

interface ColorProps {
  color?: string;
}

const getColor = ({color}: ColorProps) => (color ? color : Colors.BLACK);

// Regular text--------------------------------------
export const TextRegular10 = styled.Text<ColorProps>`
  font-size: ${sizer(10)}px;
  font-family: ${Fonts.REGULAR};
  color: ${props => getColor(props)};
`;
export const TextRegular12 = styled.Text<ColorProps>`
  font-size: ${sizer(12)}px;
  font-family: ${Fonts.REGULAR};
  color: ${props => getColor(props)};
`;
export const TextRegular14 = styled.Text<ColorProps>`
  font-size: ${sizer(14)}px;
  font-family: ${Fonts.REGULAR};
  color: ${props => getColor(props)};
`;
export const TextRegular16 = styled.Text<ColorProps>`
  font-size: ${sizer(16)}px;
  font-family: ${Fonts.REGULAR};
  color: ${props => getColor(props)};
`;
//--------------------------------------------------

// Bold text----------------------------------------
export const TextBold10 = styled.Text<ColorProps>`
  font-size: ${sizer(10)}px;
  font-family: ${Fonts.BOLD};
  color: ${props => getColor(props)};
`;
export const TextBold12 = styled.Text<ColorProps>`
  font-size: ${sizer(12)}px;
  font-family: ${Fonts.BOLD};
  color: ${props => getColor(props)};
`;
export const TextBold14 = styled.Text<ColorProps>`
  font-size: ${sizer(14)}px;
  font-family: ${Fonts.BOLD};
  color: ${props => getColor(props)};
`;
export const TextBold16 = styled.Text<ColorProps>`
  font-size: ${sizer(16)}px;
  font-family: ${Fonts.BOLD};
  color: ${props => getColor(props)};
`;
//---------------------------------------------------

// Medium text---------------------------------------
export const TextMedium10 = styled.Text<ColorProps>`
  font-size: ${sizer(10)}px;
  font-family: ${Fonts.MEDIUM};
  color: ${props => getColor(props)};
`;
export const TextMedium12 = styled.Text<ColorProps>`
  font-size: ${sizer(12)}px;
  font-family: ${Fonts.MEDIUM};
  color: ${props => getColor(props)};
`;
export const TextMedium14 = styled.Text<ColorProps>`
  font-size: ${sizer(14)}px;
  font-family: ${Fonts.MEDIUM};
  color: ${props => getColor(props)};
`;
export const TextMedium16 = styled.Text<ColorProps>`
  font-size: ${sizer(16)}px;
  font-family: ${Fonts.MEDIUM};
  color: ${props => getColor(props)};
`;
//--------------------------------------------------
