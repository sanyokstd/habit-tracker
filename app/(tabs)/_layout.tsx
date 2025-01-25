import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import { IconButton } from 'react-native-paper';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceDisabled,
        tabBarStyle: { backgroundColor: theme.colors.background },
        headerTitleStyle: {
          fontFamily: 'RobotoBold',
          fontSize: 20,
        },
        headerStyle: {
          height: 110,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          borderWidth: 1,
        },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <IconButton icon="menu" size={24} onPress={() => {}} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Звички',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-circle" size={size} color={color} />
          ),
          headerRight: () => (
            <IconButton icon="plus" size={24} onPress={() => {}} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Статистика',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          title: 'Блог',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
