import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  item: {
    flexDirection: 'row',
    gap: 10,
    borderColor: theme.colors.outlineVariant,
    padding: 5,
    alignItems: 'center',
  },
  itemIconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: theme.colors.onBackground,
    fontFamily: 'Roboto',
  },
  arrowRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
