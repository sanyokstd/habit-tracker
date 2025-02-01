import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  area: {
    flex: 1,
    backgroundColor: theme.colors.background,
    position: 'relative',
  },
  content: {
    padding: 25,
    gap: 20,
    paddingBottom: 150,
  },
  saveButton: {
    position: 'absolute',
    left: 15,
    right: 15,
    bottom: 0,
  },
});
