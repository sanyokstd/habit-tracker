import { useTheme } from '@/hooks/useTheme';
import { IHabit } from '@/types/habits';
import { useState } from 'react';
import { format, addWeeks, subWeeks, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

interface Props {
  habit: IHabit;
  onDayPress: (habitId: number, date: string) => void;
}

export const WeekSlider = ({ habit, onDayPress }: Props) => {
  const { s, theme } = useTheme(styles);
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());

  // Отримуємо дати поточного тижня
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Понеділок
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 }); // Неділя
  const weekDates = eachDayOfInterval({ start: weekStart, end: weekEnd });

  // Визначаємо чи темна тема
  const isDarkTheme = theme.dark;

  // Кольори для тексту та іконок залежно від теми
  const textColor = isDarkTheme ? '#ffffff' : '#000000';
  const borderColor = isDarkTheme ? '#ffffff' : '#000000';

  // Адаптуємо колір звички під тему для фону
  const habitColor = isDarkTheme ? habit.color + '4D' : habit.color;

  // Функції для навігації
  const goToNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const goToPreviousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const goToCurrentWeek = () => {
    setCurrentDate(new Date());
  };

  const isToday = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
  };

  const isActiveDay = (date: Date) => {
    return habit.passedDays.includes(format(date, 'yyyy-MM-dd'));
  };

  const handleDayPress = (date: Date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    onDayPress(habit.id, dateString);
  };

  // Локалізовані назви днів тижня
  const dayNames = [
    t('HabitCalendar.weekDays.mon'),
    t('HabitCalendar.weekDays.tue'),
    t('HabitCalendar.weekDays.wed'),
    t('HabitCalendar.weekDays.thu'),
    t('HabitCalendar.weekDays.fri'),
    t('HabitCalendar.weekDays.sat'),
    t('HabitCalendar.weekDays.sun'),
  ];

  // Функція для локалізованого форматування місяців
  const formatLocalizedMonth = (date: Date) => {
    const monthKey = format(date, 'MMM').toLowerCase();
    return t(`HabitCalendar.months.${monthKey}`);
  };

  return (
    <View style={s.weekSlider}>
      {/* Заголовок з навігацією */}
      <View style={s.weekHeader}>
        <TouchableOpacity
          onPress={goToPreviousWeek}
          style={[s.navButton, { backgroundColor: theme.colors.surfaceVariant }]}
        >
          <Ionicons name="chevron-back" size={20} color={textColor} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goToCurrentWeek} style={s.weekTitle}>
          <Text style={[s.weekTitleText, { color: textColor }]}>
            {format(weekStart, 'dd')} {formatLocalizedMonth(weekStart)} - {format(weekEnd, 'dd')}{' '}
            {formatLocalizedMonth(weekEnd)} {format(weekEnd, 'yyyy')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goToNextWeek}
          style={[s.navButton, { backgroundColor: theme.colors.surfaceVariant }]}
        >
          <Ionicons name="chevron-forward" size={20} color={textColor} />
        </TouchableOpacity>
      </View>

      {/* Дні тижня */}
      <View style={s.weekDays}>
        {weekDates.map((date, index) => {
          const dayName = dayNames[index];
          const isTodayDate = isToday(date);
          const isActive = isActiveDay(date);

          return (
            <View key={format(date, 'yyyy-MM-dd')} style={s.dayContainer}>
              <Text style={[s.dayName, { color: textColor }]}>{dayName}</Text>
              <TouchableOpacity
                onPress={() => handleDayPress(date)}
                style={[
                  s.dayCircle,
                  { backgroundColor: isActive ? habitColor : 'transparent' },
                  isTodayDate && { borderColor: borderColor },
                ]}
              >
                <Text style={[s.dayNumber, { color: isActive ? '#ffffff' : textColor }]}>
                  {format(date, 'd')}
                </Text>
              </TouchableOpacity>
              <View style={[s.dot, { backgroundColor: isActive ? habit.color : 'transparent' }]} />
            </View>
          );
        })}
      </View>
    </View>
  );
};
