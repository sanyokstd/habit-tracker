import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text as DefaultText} from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <DefaultText variant="bodyLarge">Press me</DefaultText>
    </SafeAreaView>
  );
}

export default App;
