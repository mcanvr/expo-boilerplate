import { Pressable } from 'react-native';
import { cn } from '~/utils/classnames';
import { IButton } from './Button.types';

export default function Button({ children, variant, ...props }: IButton) {
  const BUTTON_CLASSNAMES = {
    red: 'border-b-red-400 bg-red-500 shadow-red-600 active:bg-red-600',
    green: 'border-b-green-400 bg-green-500 shadow-green-600 active:bg-green-600',
    orange: 'border-b-orange-400 bg-orange-500 shadow-orange-600 active:bg-orange-600',
  };

  return (
    <Pressable
      className={cn(
        'flex-row items-center gap-2 rounded-lg border-b-4 p-3 shadow-sm transition-all active:border-b-2',
        BUTTON_CLASSNAMES[variant],
        {
          'opacity-40': props.disabled,
        }
      )}
      {...props}>
      {children}
    </Pressable>
  );
}
