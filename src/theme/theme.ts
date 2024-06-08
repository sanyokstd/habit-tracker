import {
  MD3LightTheme as DefaultTheme,
  configureFonts,
} from 'react-native-paper';
import {fontConfig} from './fontConfig';

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts({config: fontConfig}),
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#27c26c',
    primaryDark: '#21a75d',
    primaryAccent: '#eb4e29',
    secondaryJungleBlack: '#2c2e3c',
    secondaryCharcoal: '#585a6e',
    secondaryDarkGray: '#a4a7b2',
    secondaryLightGray: '#edeef2',
    grayInfo: '#6d6f78',
    tertiarySaffron: '#f7b82f',
    tertiarySaffronLight: '#fce3ac',
    tertiaryBlue: '#3c4ad9',
    tertiaryBlueLight: '#b1b7f0',
    error: '#d02839',
    errorLight: '#f22f42',
    footerDefault: '#4c4d5e',
    linkDefault: '#0077b7',
    linkOrange: '#f46736',
    linkOrangeLight: '#de6c2d',
    linkGray: '#585a6e',
    linkActiveWhite: '#dcdde1',
    paragraphCard: '#4b546b',
    subtitleLightGray: '#38415b',
    iconCheckOrange: '#eb5d3d',
    backgroundSectionGray: '#edeef2',
  },
};
