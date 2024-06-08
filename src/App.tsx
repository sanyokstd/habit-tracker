import React from 'react';
import {SafeAreaView} from 'react-native';

import {FirstScreen} from 'screens';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FirstScreen />
    </SafeAreaView>
  );
}

export default App;
