import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  text: {
    fontSize: 24,
    fontFamily: 'RobotoBold',
    color: theme.colors.onBackground,
  },
  textPrimary: {
    color: theme.colors.primary,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    gap: 20,
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
});
