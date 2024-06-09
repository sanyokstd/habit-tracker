import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardScreen} from 'screens';

const Tab = createBottomTabNavigator();

export function DashboardNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Habits" component={DashboardScreen} />
    </Tab.Navigator>
  );
}
