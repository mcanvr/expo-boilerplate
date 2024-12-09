import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Add, Minus, Refresh } from 'iconsax-react-native';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '~/components/Button';
import { ExpoIcon } from '~/components/Icons';
import { Text } from '~/components/Text';
import { StyledComponent } from '~/hooks/useStyledComponent';
import { RootState } from '~/store';
import { changeCounterValue, decrement, increment, reset } from '~/store/slices/counterSlice';
import { getData, storeData } from '~/utils/secure-store';
import { Case, Switch } from '~/utils/switch-case';

export default function Home(): React.ReactElement {
  const { value: counterValue } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const { t } = useTranslation();
  const [showReset] = useState(true);

  const handleLongPress = (action: () => void) => {
    const id = setInterval(() => {
      action();
    }, 100);
    setIntervalId(id);
  };

  const handlePressOut = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const checkCounterValue = async () => {
    const counterValue = await getData('counter_value');
    if (typeof counterValue === 'string') {
      dispatch(changeCounterValue(Number(counterValue)));
    }
  };

  const setCounterValue = async (value: number) => {
    await storeData('counter_value', value.toString());
  };

  useEffect(() => {
    checkCounterValue();
  }, []);

  useEffect(() => {
    setCounterValue(counterValue);
  }, [counterValue]);

  return (
    <LinearGradient
      colors={['#000', '#132132', '#1c314b']}
      style={{
        flex: 1,
      }}>
      <StatusBar style="light" />
      <View className="pt-safe flex-1 items-center justify-center gap-12 px-5">
        <View className="top-safe-offset-10 absolute w-full items-center justify-center gap-4">
          <Text fontWeight="light" className="text-white/80">
            Generated with
          </Text>
          <StyledComponent
            component={ExpoIcon}
            className="h-10 w-40 text-white shadow-xl shadow-blue-400"
          />
        </View>
        <Text fontSize="4xl" fontWeight="black" className="border-b-2 border-white text-white">
          {t('count', { count: counterValue })}
        </Text>
        <View className="flex-row flex-wrap items-center justify-center gap-4 px-8">
          <Button
            variant="green"
            onPress={() => {
              dispatch(increment());
            }}
            onLongPress={() => handleLongPress(() => dispatch(increment()))}
            onPressOut={handlePressOut}>
            <Add size="20" color="#fff" />
            <Text fontWeight="bold" className="text-white">
              {t('increase')}
            </Text>
          </Button>
          <Button
            disabled={counterValue === 0}
            variant="red"
            onPress={() => {
              dispatch(decrement());
            }}
            onLongPress={() => handleLongPress(() => dispatch(decrement()))}
            onPressOut={handlePressOut}>
            <Minus size="20" color="#fff" />
            <Text fontWeight="bold" className="text-white">
              {t('decrease')}
            </Text>
          </Button>
          <Switch>
            <Case condition={showReset === true}>
              <Button
                variant="orange"
                onPress={() => {
                  dispatch(reset());
                }}>
                <Refresh size="20" color="#fff" />
                <Text fontWeight="bold" className="text-white">
                  {t('reset')}
                </Text>
              </Button>
            </Case>
          </Switch>
        </View>
      </View>
    </LinearGradient>
  );
}
