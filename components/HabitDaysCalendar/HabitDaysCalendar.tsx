import { HabitColor, HabitColorLight } from '@/types/habits';
import { getLastWeeksDates } from '@/utils/getLastWeeksDates';
import { Fragment, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

interface Props {
  activeDates: string[];
  color: HabitColor;
  colorLight: HabitColorLight;
}

export const HabitDaysCalendar = ({ activeDates, color, colorLight }: Props) => {
  const lastWeeksDates = getLastWeeksDates().reverse(); // Перевертаємо дати (нові дні в кінці)
  const scrollViewRef = useRef<ScrollView>(null); // Реф для ScrollView
  console.log(lastWeeksDates);
  useEffect(() => {
    // Прокручуємо до кінця при завантаженні компонента
    scrollViewRef.current?.scrollToEnd({ animated: false });
  }, []);

  const renderCalendar = () => {
    const daysInWeek = 7;

    // Рендеримо один тиждень
    const renderWeek = (weekDates: string[]) => {
      return (
        <View style={s.calendarColumn} key={weekDates[0]}>
          {weekDates.map((date) => {
            const isActive = activeDates.includes(date); // Перевіряємо, чи є дата активною
            return <View key={date} style={[s.calendarDay, { backgroundColor: isActive ? color : colorLight }]} />;
          })}
        </View>
      );
    };

    // Розділяємо дати по тижнях
    const weeks = [];
    for (let i = 0; i < lastWeeksDates.length; i += daysInWeek) {
      weeks.push(lastWeeksDates.slice(i, i + daysInWeek));
    }

    return (
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        contentContainerStyle={s.calendar}
        showsHorizontalScrollIndicator={false} // Приховуємо горизонтальний скролбар
      >
        {weeks.map((weekDates) => renderWeek(weekDates))}
      </ScrollView>
    );
  };

  return <Fragment>{renderCalendar()}</Fragment>;
};

const s = StyleSheet.create({
  calendar: {
    flexDirection: 'row-reverse', // Реверсуємо порядок тижнів (нові тижні праворуч)
    gap: 4,
    paddingBottom: 10,
  },
  calendarColumn: {
    flexDirection: 'column-reverse',
    gap: 4,
  },
  calendarDay: {
    width: 10,
    height: 10,
    borderRadius: 2,
  },
});
