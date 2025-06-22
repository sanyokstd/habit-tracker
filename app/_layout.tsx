import '@/i18n';
import { getActiveTheme } from '@/theme/theme';
import { ThemeProvider, useThemeContext } from '@/theme/ThemeContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

// Запобігаємо автоматичному приховуванню splash скріна
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      // Приховуємо splash скрін тільки після завантаження шрифтів
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useThemeContext();
  const paperTheme = getActiveTheme(theme);
  const backgroundColor = theme.dark ? '#1a1c19' : '#fcfdf7';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <PaperProvider theme={paperTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen
            name="settings"
            options={{ animation: 'slide_from_left', animationDuration: 200 }}
          />
          <Stack.Screen
            name="new-habit"
            options={{ animation: 'slide_from_right', animationDuration: 200 }}
          />
          <Stack.Screen
            name="edit-habit"
            options={{ animation: 'slide_from_right', animationDuration: 200 }}
          />
        </Stack>
        <StatusBar style={theme.dark ? 'light' : 'dark'} />
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
