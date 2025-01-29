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
  const lastWeeksDates = getLastWeeksDates().reverse();
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: false });
  }, []);

  const renderCalendar = () => {
    const daysInWeek = 7;

    const renderWeek = (weekDates: string[]) => {
      return (
        <View style={s.calendarColumn} key={weekDates[0]}>
          {weekDates.map((date) => {
            const isActive = activeDates.includes(date);
            return <View key={date} style={[s.calendarDay, { backgroundColor: isActive ? color : colorLight }]} />;
          })}
        </View>
      );
    };

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
        showsHorizontalScrollIndicator={false}
      >
        {weeks.map((weekDates) => renderWeek(weekDates))}
      </ScrollView>
    );
  };

  return <Fragment>{renderCalendar()}</Fragment>;
};

const s = StyleSheet.create({
  calendar: {
    flexDirection: 'row-reverse',
    gap: 4,
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
