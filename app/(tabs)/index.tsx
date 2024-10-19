import { MainLayout } from '@/components';
import { Text, TouchableHighlight, View } from 'react-native';
import Swiper from 'react-native-swiper';

export default function HomeScreen() {
  return (
    <MainLayout title="Habits">
      <View className="flex-row gap-4 p-4 relative">
        <TouchableHighlight className="py-2 px-4 rounded-2xl bg-white">
          <Text className="text-lg">Today</Text>
        </TouchableHighlight>
        <TouchableHighlight className="py-2 px-4 rounded-2xl bg-white">
          <Text className="text-lg">Weakly</Text>
        </TouchableHighlight>
      </View>
      <View className="flex-1">
        <Swiper loop={false}>
          <View className="flex-1">
            <Text>habit 1</Text>
          </View>
          <View className="flex-1">
            <Text>habit 2</Text>
          </View>
        </Swiper>
      </View>
    </MainLayout>
  );
}
