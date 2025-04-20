import { useTheme } from '@/hooks/useTheme';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles';

export const AddFirstHabit = () => {
  const { s } = useTheme(styles);
  const router = useRouter();

  return (
    <View style={s.view}>
      <Text style={s.text}>List of habits empty</Text>
      <Button mode="contained" textColor="#fff" onPress={() => router.push('/new-habit')}>
        Create a habit
      </Button>
    </View>
  );
};
