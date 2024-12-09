import { Text as RNText } from 'react-native';
import { cn } from '~/utils/classnames';
import { IText, TextFontSizeType, TextFontWeightType } from './Text.types';

const TEXT_FONT_SIZE_CLASSES: Record<TextFontSizeType, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
};

const TEXT_FONT_WEIGHT_CLASSES: Record<TextFontWeightType, string> = {
  thin: 'font-thin',
  ultralight: 'font-ultralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  ultrablack: 'font-ultrablack',
  black: 'font-black',
};

export default function Text({
  children,
  fontSize = 'base',
  fontWeight = 'normal',
  className,
  ...props
}: IText) {
  const fontSizeClass = TEXT_FONT_SIZE_CLASSES[fontSize] || TEXT_FONT_SIZE_CLASSES.base;
  const fontWeightClass = TEXT_FONT_WEIGHT_CLASSES[fontWeight] || TEXT_FONT_WEIGHT_CLASSES.normal;

  const combinedClassName = cn(fontSizeClass, fontWeightClass, className);

  return (
    <RNText className={combinedClassName} {...props}>
      {children}
    </RNText>
  );
}
