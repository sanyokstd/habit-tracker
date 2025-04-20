import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  view: {
    gap: 4,
  },
  title: {
    color: theme.colors.onBackground,
    fontSize: 18,
    fontFamily: 'Roboto',
    marginBottom: 4,
  },
  wrap: {
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
});
