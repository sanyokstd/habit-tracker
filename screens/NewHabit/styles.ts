import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  keyboard: {
    flex: 1,
    position: 'relative',
  },
  area: {
    flex: 1,
    backgroundColor: theme.colors.background,
    position: 'relative',
  },
  saveButtonWrapper: {
    position: 'absolute',
    left: 15,
    right: 15,
    bottom: 0,
  },
  saveButtonContent: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  flex: {
    flexDirection: 'row',
    gap: 10,
  },
  flexItem: {
    flex: 1,
  },
});
