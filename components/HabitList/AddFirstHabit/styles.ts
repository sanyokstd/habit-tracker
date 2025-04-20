import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  view: {
    height: 300,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: theme.colors.onBackground,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
});
