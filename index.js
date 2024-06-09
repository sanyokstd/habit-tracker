import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './src/App';
import {theme} from './src/theme/theme';
import {NavigationContainer} from '@react-navigation/native';

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
