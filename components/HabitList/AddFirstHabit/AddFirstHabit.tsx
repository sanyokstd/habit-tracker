import { useTheme } from '@/hooks/useTheme';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles';

export const AddFirstHabit = () => {
  const { s } = useTheme(styles);
  return (
    <View style={s.view}>
      <Text style={s.text}>List of habits empty</Text>
      <Button mode="contained" textColor="#fff">
        Create new habit
      </Button>
    </View>
  );
};
