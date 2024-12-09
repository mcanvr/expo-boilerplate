import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { ExpoRoot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import { Provider } from 'react-redux';
import './global.css';
import './locales/i18n';
import { store } from './store';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

SplashScreen.preventAutoHideAsync();

export function App() {
  const ctx = require.context('./screens');
  const [loaded, error] = useFonts({
    'GeistMono-Black': require('~/assets/fonts/GeistMono/GeistMono-Black.ttf'),
    'GeistMono-Bold': require('~/assets/fonts/GeistMono/GeistMono-Bold.ttf'),
    'GeistMono-Light': require('~/assets/fonts/GeistMono/GeistMono-Light.ttf'),
    'GeistMono-Regular': require('~/assets/fonts/GeistMono/GeistMono-Regular.ttf'),
    'GeistMono-SemiBold': require('~/assets/fonts/GeistMono/GeistMono-SemiBold.ttf'),
    'GeistMono-Thin': require('~/assets/fonts/GeistMono/GeistMono-Thin.ttf'),
    'GeistMono-UltraBlack': require('~/assets/fonts/GeistMono/GeistMono-UltraBlack.ttf'),
    'GeistMono-UltraLight': require('~/assets/fonts/GeistMono/GeistMono-UltraLight.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <ExpoRoot context={ctx} />
    </Provider>
  );
}

registerRootComponent(App);
