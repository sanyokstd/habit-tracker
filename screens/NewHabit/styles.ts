import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  keyboard: {
    flex: 1,
  },
  area: {
    flex: 1,
    backgroundColor: theme.colors.background,
    position: 'relative',
  },
  content: {
    padding: 15,
    gap: 20,
    paddingBottom: 150,
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
  formBlock: {
    gap: 4,
  },
  formLabel: {
    color: theme.colors.onBackground,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  list: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
});
