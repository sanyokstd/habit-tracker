import { Theme } from '@react-navigation/native';
import { MD3LightTheme as DefaultLightTheme, MD3DarkTheme as DefaultDarkTheme, MD3Theme } from 'react-native-paper';

// Світла тема
export const lightTheme = {
  ...DefaultLightTheme,
  colors: {
    ...DefaultLightTheme.colors,
    primary: '#388e3c',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(101, 255, 144)',
    onPrimaryContainer: 'rgb(0, 33, 10)',
    secondary: 'rgb(0, 99, 154)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(206, 229, 255)',
    onSecondaryContainer: 'rgb(0, 29, 50)',
    tertiary: 'rgb(186, 26, 32)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(255, 218, 214)',
    onTertiaryContainer: 'rgb(65, 0, 3)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(252, 253, 247)',
    onBackground: 'rgb(26, 28, 25)',
    surface: 'rgb(252, 253, 247)',
    onSurface: 'rgb(26, 28, 25)',
    surfaceVariant: 'rgb(221, 229, 218)',
    onSurfaceVariant: 'rgb(65, 73, 65)',
    outline: 'rgb(114, 121, 112)',
    outlineVariant: 'rgb(193, 201, 190)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(46, 49, 46)',
    inverseOnSurface: 'rgb(240, 241, 236)',
    inversePrimary: 'rgb(44, 227, 113)',
    surfaceDisabled: 'rgba(26, 28, 25, 0.12)',
    onSurfaceDisabled: 'rgba(26, 28, 25, 0.38)',
    backdrop: 'rgba(43, 50, 43, 0.4)',
    text: 'rgb(154, 64, 88)',
    onText: 'rgb(255, 255, 255)',
    textContainer: 'rgb(255, 217, 223)',
    onTextContainer: 'rgb(63, 0, 23)',
  },
  roundness: 8,
};

// Темна тема
export const darkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: '#388e3c',
    onPrimary: 'rgb(0, 57, 22)',
    primaryContainer: 'rgb(0, 83, 35)',
    onPrimaryContainer: 'rgb(101, 255, 144)',
    secondary: 'rgb(150, 204, 255)',
    onSecondary: 'rgb(0, 51, 83)',
    secondaryContainer: 'rgb(0, 74, 117)',
    onSecondaryContainer: 'rgb(206, 229, 255)',
    tertiary: 'rgb(255, 179, 172)',
    onTertiary: 'rgb(104, 0, 8)',
    tertiaryContainer: 'rgb(147, 0, 16)',
    onTertiaryContainer: 'rgb(255, 218, 214)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(26, 28, 25)',
    onBackground: 'rgb(226, 227, 222)',
    surface: 'rgb(26, 28, 25)',
    onSurface: 'rgb(226, 227, 222)',
    surfaceVariant: 'rgb(65, 73, 65)',
    onSurfaceVariant: 'rgb(193, 201, 190)',
    outline: 'rgb(139, 147, 137)',
    outlineVariant: 'rgb(65, 73, 65)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(226, 227, 222)',
    inverseOnSurface: 'rgb(46, 49, 46)',
    inversePrimary: 'rgb(0, 109, 48)',
    surfaceDisabled: 'rgba(226, 227, 222, 0.12)',
    onSurfaceDisabled: 'rgba(226, 227, 222, 0.38)',
    backdrop: 'rgba(43, 50, 43, 0.4)',
    text: 'rgb(255, 177, 193)',
    onText: 'rgb(95, 17, 43)',
    textContainer: 'rgb(124, 41, 65)',
    onTextContainer: 'rgb(255, 217, 223)',
  },
  roundness: 8,
};

/**
 * Отримує активну тему залежно від системної теми
 * @returns {MD3Theme} Активна тема (lightTheme або darkTheme)
 */
export const getActiveTheme = (theme: Theme): MD3Theme => {
  return theme.dark ? darkTheme : lightTheme;
};
