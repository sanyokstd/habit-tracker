import { useTheme } from '@/hooks/useTheme';
import { IHabit } from '@/types/habits';
import { Dispatch, SetStateAction } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from 'date-fns';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

interface Props {
  habit: IHabit;
  onDayPress: (habitId: number, date: string) => void;
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

export const MonthCalendar = ({ habit, onDayPress, currentDate, setCurrentDate }: Props) => {
  const { s, theme } = useTheme(styles);
  const { t } = useTranslation();

  // Отримуємо дати поточного місяця
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const allDates = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  // Розбиваємо дати на тижні
  const weeks: Date[][] = [];
  for (let i = 0; i < allDates.length; i += 7) {
    weeks.push(allDates.slice(i, i + 7));
  }

  const isDarkTheme = theme.dark;
  const textColor = isDarkTheme ? '#ffffff' : '#000000';
  const lightTextColor = isDarkTheme ? '#ffffff80' : '#00000080';
  const habitColor = isDarkTheme ? habit.color + '4D' : habit.color;
  const borderColor = isDarkTheme ? '#ffffff' : '#000000';

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const goToCurrentMonth = () => {
    setCurrentDate(new Date());
  };

  const isToday = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
  };

  const isActiveDay = (date: Date) => {
    return habit.passedDays.includes(format(date, 'yyyy-MM-dd'));
  };

  const isCurrentMonth = (date: Date) => {
    return format(date, 'MM-yyyy') === format(currentDate, 'MM-yyyy');
  };

  const handleDayPress = (date: Date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    onDayPress(habit.id, dateString);
  };

  const dayNames = [
    t('HabitCalendar.weekDays.mon'),
    t('HabitCalendar.weekDays.tue'),
    t('HabitCalendar.weekDays.wed'),
    t('HabitCalendar.weekDays.thu'),
    t('HabitCalendar.weekDays.fri'),
    t('HabitCalendar.weekDays.sat'),
    t('HabitCalendar.weekDays.sun'),
  ];

  const formatLocalizedMonth = (date: Date) => {
    const monthKey = format(date, 'MMM').toLowerCase();
    return t(`HabitCalendar.months.${monthKey}`);
  };

  return (
    <View style={s.monthCalendar}>
      {/* Заголовок з навігацією */}
      <View style={s.monthHeader}>
        <TouchableOpacity
          onPress={goToPreviousMonth}
          style={[s.navButton, { backgroundColor: theme.colors.surfaceVariant }]}
        >
          <Ionicons name="chevron-back" size={20} color={textColor} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goToCurrentMonth} style={s.monthTitle}>
          <Text style={[s.monthTitleText, { color: textColor }]}>
            {formatLocalizedMonth(currentDate)} {format(currentDate, 'yyyy')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goToNextMonth}
          style={[s.navButton, { backgroundColor: theme.colors.surfaceVariant }]}
        >
          <Ionicons name="chevron-forward" size={20} color={textColor} />
        </TouchableOpacity>
      </View>

      {/* Заголовки днів тижня */}
      <View style={s.monthWeekDays}>
        {dayNames.map((dayName, index) => (
          <View key={index} style={s.monthDayHeader}>
            <Text style={[s.monthDayHeaderText, { color: textColor }]}>{dayName}</Text>
          </View>
        ))}
      </View>

      {/* Календарна сітка */}
      <View style={s.monthGrid}>
        {weeks.map((week, weekIndex) => (
          <View key={weekIndex} style={s.monthWeek}>
            {week.map((date) => {
              const isTodayDate = isToday(date);
              const isActive = isActiveDay(date);
              const isInCurrentMonth = isCurrentMonth(date);

              return (
                <View key={format(date, 'yyyy-MM-dd')} style={s.monthDayContainer}>
                  <TouchableOpacity
                    onPress={() => handleDayPress(date)}
                    style={[
                      s.monthDayCircle,
                      { backgroundColor: isActive ? habitColor : 'transparent' },
                      isTodayDate && { borderColor: borderColor, borderWidth: 1 },
                    ]}
                  >
                    <Text
                      style={[
                        s.monthDayNumber,
                        {
                          color: isActive
                            ? '#ffffff'
                            : isInCurrentMonth
                              ? textColor
                              : lightTextColor,
                        },
                      ]}
                    >
                      {format(date, 'd')}
                    </Text>
                  </TouchableOpacity>
                  {isActive && <View style={[s.monthDot, { backgroundColor: habit.color }]} />}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};
