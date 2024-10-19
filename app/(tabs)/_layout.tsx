import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#65a30d',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#f3f4f6',
          borderTopWidth: 2,
          borderTopColor: colorScheme === 'dark' ? '#1c1c1e' : '#e5e7eb',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Habits',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="stats-chart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
