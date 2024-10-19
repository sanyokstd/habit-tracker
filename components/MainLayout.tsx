import { FC } from 'react';
import { View, ScrollView, TouchableHighlight, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from '@/components';

interface MainLayoutProps {
  title: string;
  isScrollable?: boolean;
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  title,
  isScrollable,
  children,
}) => {
  return (
    <View className="h-full bg-gray-100 dark:bg-slate-800">
      <SafeAreaView>
        <View className="border-b-2 border-gray-200 flex-row items-center justify-between p-2">
          <IconButton iconName="menu-outline" iconSize={30} iconColor="black" />
          <Text className="text-center text-2xl font-bold flex-1">{title}</Text>
          <IconButton
            iconName="create-outline"
            iconSize={30}
            iconColor="black"
          />
        </View>
        {isScrollable ? (
          <ScrollView className="p-4">{children}</ScrollView>
        ) : (
          <View className="h-full">{children}</View>
        )}
      </SafeAreaView>
    </View>
  );
};
