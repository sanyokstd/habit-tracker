import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  header: {
    flexDirection: 'row',
    gap: 20,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: 'RobotoBold',
    color: theme.colors.onBackground,
  },
});
