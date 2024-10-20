import clsx from 'clsx';
import { Text, TouchableOpacity, View } from 'react-native';

interface TabItemProps {
  text: string;
  onPress: () => void;
  active?: boolean;
}

export const TabItem = ({ text, onPress, active }: TabItemProps) => {
  return (
    <View>
      <TouchableOpacity
        className={clsx('py-2 px-4 rounded-2xl', active && 'bg-green-600')}
        onPress={onPress}
      >
        <Text className={clsx('text-lg', active && 'text-white font-bold')}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
