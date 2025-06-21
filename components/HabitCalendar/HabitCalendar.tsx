import { useTheme } from '@/hooks/useTheme';
import { IHabit } from '@/types/habits';
import { View } from 'react-native';
import { WeekSlider } from './WeekSlider';
import { styles } from './styles';

interface Props {
  habit: IHabit;
  onDayPress: (habitId: number, date: string) => void;
}

export const HabitCalendar = ({ habit, onDayPress }: Props) => {
  const { s } = useTheme(styles);

  return (
    <View style={s.calendar}>
      <WeekSlider habit={habit} onDayPress={onDayPress} />
    </View>
  );
};
