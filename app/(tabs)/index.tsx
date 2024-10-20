import { TabItem, MainLayout } from '@/components';
import { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<Swiper>(null);

  const handleTabPress = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.scrollTo(index);
  };

  return (
    <MainLayout title="Habits">
      <View className="flex-row p-4" style={{ gap: 10 }}>
        <TabItem
          text="Today"
          onPress={() => handleTabPress(0)}
          active={activeIndex === 0}
        />
        <TabItem
          text="Weakly"
          onPress={() => handleTabPress(1)}
          active={activeIndex === 1}
        />
      </View>
      <View className="flex-1">
        <Swiper
          ref={swiperRef}
          loop={false}
          onIndexChanged={(index) => setActiveIndex(index)}
        >
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
