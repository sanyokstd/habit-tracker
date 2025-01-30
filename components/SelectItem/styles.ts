import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  item: {
    flexDirection: 'row',
    gap: 10,
    borderColor: theme.colors.outlineVariant,
    padding: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: theme.colors.onBackground,
    fontFamily: 'Roboto',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
