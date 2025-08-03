import { useTheme } from '@/hooks/useTheme';
import { IHabit } from '@/types/habits';
import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { WeekSlider } from './WeekSlider';
import { MonthCalendar } from './MonthCalendar';
import { styles } from './styles';

interface Props {
  habit: IHabit;
  onDayPress: (habitId: number, date: string) => void;
  isMonthView: boolean;
}

export const HabitCalendar = ({ habit, onDayPress, isMonthView }: Props) => {
  const { s, theme } = useTheme(styles);
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());

  const isDarkTheme = theme.dark;
  const textColor = isDarkTheme ? '#ffffff' : '#000000';

  return (
    <View style={s.calendar}>
      {isMonthView ? (
        <MonthCalendar
          habit={habit}
          onDayPress={onDayPress}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      ) : (
        <WeekSlider
          habit={habit}
          onDayPress={onDayPress}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      )}
    </View>
  );
};
