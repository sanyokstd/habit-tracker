import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  item: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    gap: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBlock: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: theme.colors.onBackground,
    fontFamily: 'Roboto',
  },
  description: {
    fontSize: 15,
    color: theme.colors.onBackground,
  },
  goal: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-end',
  },
  goalText: {
    fontSize: 15,
    color: theme.colors.onBackground,
  },
});
