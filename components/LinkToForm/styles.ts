import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  wrap: {
    width: '100%',
    gap: 4,
  },
  label: {
    color: theme.colors.onBackground,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  link: {
    borderWidth: 1,
    borderColor: theme.colors.onSurface,
    width: '100%',
    padding: 15,
    paddingRight: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    flex: 1,
    color: theme.colors.onBackground,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});
