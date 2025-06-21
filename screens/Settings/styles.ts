import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  area: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: 15,
    gap: 20,
  },
  menuItem: {
    flexDirection: 'row',
    gap: 10,
  },
  madeWith: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'column',
  },
  text: {
    fontSize: 16,
    color: theme.colors.onBackground,
  },
  textLink: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
});
