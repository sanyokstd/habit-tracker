import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  calendar: {
    marginVertical: 0,
  },
  weekSlider: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  weekHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  navButton: {
    padding: 8,
    borderRadius: 20,
  },
  weekTitle: {
    flex: 1,
    alignItems: 'center',
  },
  weekTitleText: {
    fontSize: 14,
    fontWeight: '600',
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayContainer: {
    alignItems: 'center',
    flex: 1,
  },
  dayName: {
    fontSize: 10,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 8,
    fontWeight: '500',
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    marginBottom: 4,
    backgroundColor: 'transparent',
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: '500',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginTop: 2,
    overflow: 'hidden',
    elevation: 0,
    zIndex: 1,
    position: 'relative',
  },
});
