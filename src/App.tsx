import {DashboardNavigator} from 'navigator';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {FirstScreen} from 'screens';
import {userStore} from 'store/userStore';

function App(): React.JSX.Element {
  const {isAuthenticated} = userStore();
  return (
    <SafeAreaView style={{flex: 1}}>
      {isAuthenticated ? <DashboardNavigator /> : <FirstScreen />}
    </SafeAreaView>
  );
}

export default App;
