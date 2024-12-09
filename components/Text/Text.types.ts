import { TextProps } from 'react-native';

export type TextFontSizeType =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type TextFontWeightType =
  | 'thin'
  | 'light'
  | 'ultralight'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'ultrablack'
  | 'black';

export interface IText extends TextProps {
  fontSize?: TextFontSizeType;
  fontWeight?: TextFontWeightType;
  children: React.ReactNode;
}
