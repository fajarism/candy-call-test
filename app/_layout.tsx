import 'react-native-reanimated';

import '../output.css'

import * as SplashScreen from 'expo-splash-screen';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Outfit_black: require('../assets/fonts/Outfit-Black.ttf'),
    Outfit_bold: require('../assets/fonts/Outfit-Bold.ttf'),
    Outfit_extraBold: require('../assets/fonts/Outfit-ExtraBold.ttf'),
    Outfit_extraLight: require('../assets/fonts/Outfit-ExtraLight.ttf'),
    Outfit_light: require('../assets/fonts/Outfit-Light.ttf'),
    Outfit_medium: require('../assets/fonts/Outfit-Medium.ttf'),
    Outfit_regular: require('../assets/fonts/Outfit-Regular.ttf'),
    Outfit_semiBold: require('../assets/fonts/Outfit-SemiBold.ttf'),
    Outfit_thin: require('../assets/fonts/Outfit-Thin.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
