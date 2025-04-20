import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  chip: {
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
  },
  chipSelected: {
    backgroundColor: theme.colors.primary,
  },
  selectedIcon: {
    width: 25,
    height: 25,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});
