import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  mainView: {
    flexDirection: 'row',
    gap: 4,
  },
  daysView: {
    justifyContent: 'space-between',
    gap: 4,
  },
  dayText: {
    color: theme.colors.onBackground,
  },
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
