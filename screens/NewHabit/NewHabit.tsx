import { BottomGradient, ModalHeader } from '@/components';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { styles } from './styles';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const NewHabit = () => {
  const { s } = useTheme(styles);
  const insets = useSafeAreaInsets();

  return (
    <View style={s.area}>
      <ModalHeader title="New habit" />
      <ScrollView contentContainerStyle={s.content}>
        <Text>NewHabit</Text>
        <View style={{ height: 1000, borderWidth: 1 }}></View>
      </ScrollView>
      <BottomGradient />
      <Button
        style={[s.saveButton, { bottom: insets.bottom + 15 }]}
        mode="contained"
        onPress={() => console.log('Pressed')}
        textColor="#fff"
      >
        SAVE
      </Button>
    </View>
  );
};
