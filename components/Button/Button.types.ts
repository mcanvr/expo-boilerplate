import { PressableProps } from 'react-native';

export interface IButton extends PressableProps {
  variant: 'red' | 'green' | 'orange';
  children: React.ReactNode;
}
