import { ImageBackgroundProps, ImageProps } from 'expo-image';
import { cssInterop } from 'nativewind';
import type { ComponentClass, ForwardRefExoticComponent, FunctionComponent } from 'react';
import React from 'react';
import {
  PressableProps,
  ImageBackgroundProps as RNImageBackgroundProps,
  ImageProps as RNImageProps,
  ScrollViewProps,
  TextProps,
  ViewProps,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

/**
 * React component types that can be a class, function, or forward reference component.
 */
export type ReactComponent<P = any> =
  | ComponentClass<P>
  | FunctionComponent<P>
  | ForwardRefExoticComponent<P>;

/**
 * A custom hook that applies styling to a given component.
 * Uses nativewind's `cssInterop` to integrate classNames and styles for various React Native components.
 */
export const useStyledComponent = (
  component: ReactComponent
): React.ComponentType<
  | ViewProps
  | ImageBackgroundProps
  | TextProps
  | SvgProps
  | RNImageBackgroundProps
  | RNImageProps
  | ImageProps
  | ScrollViewProps
  | PressableProps
> => {
  return cssInterop(component, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        height: true,
        width: true,
      },
    },
  });
};

/**
 * A styled wrapper component that takes in a component and applies styles using `useStyledComponent`.
 */
type StyledComponentProps = {
  component: React.ComponentType<any>;
} & (
  | ViewProps
  | ImageBackgroundProps
  | TextProps
  | SvgProps
  | RNImageBackgroundProps
  | RNImageProps
  | ImageProps
  | ScrollViewProps
  | PressableProps
);

/**
 * A functional component that renders a styled component.
 * Uses the `useStyledComponent` hook to style the passed component.
 */
export const StyledComponent: React.FC<StyledComponentProps> = ({
  component: Component,
  ...props
}) => {
  const StyledComp = useStyledComponent(Component);
  return <StyledComp {...props} />;
};
