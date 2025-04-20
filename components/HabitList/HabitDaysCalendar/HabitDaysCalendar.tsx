import { useTheme } from '@/hooks/useTheme';
import { getLastWeeksDates } from '@/utils/getLastWeeksDates';
import { Fragment, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
  activeDates: string[];
  color: string;
  colorLight: string;
}

export const HabitDaysCalendar = ({ activeDates, color, colorLight }: Props) => {
  const { t } = useTranslation();
  const { s } = useTheme(styles);

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
            return (
              <View
                key={date}
                style={[s.calendarDay, { backgroundColor: isActive ? color : colorLight }]}
              />
            );
          })}
        </View>
      );
    };

    const weeks = [];
    for (let i = 0; i < lastWeeksDates.length; i += daysInWeek) {
      weeks.push(lastWeeksDates.slice(i, i + daysInWeek));
    }

    return (
      <View style={s.mainView}>
        <View style={s.daysView}>
          <Text style={s.dayText}>{t('HabitDaysCalendar.mon')}</Text>
          <Text style={s.dayText}>{t('HabitDaysCalendar.wed')}</Text>
          <Text style={s.dayText}>{t('HabitDaysCalendar.sun')}</Text>
        </View>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          contentContainerStyle={s.calendar}
          showsHorizontalScrollIndicator={false}
        >
          {weeks.map((weekDates) => renderWeek(weekDates))}
        </ScrollView>
      </View>
    );
  };

  return <Fragment>{renderCalendar()}</Fragment>;
};
