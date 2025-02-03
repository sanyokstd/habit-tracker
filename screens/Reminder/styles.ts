import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  area: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: 15,
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
  },
  dayButton: {
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 40,
  },
  dayButtonSelected: {
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.onBackground,
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  selectAllView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});
