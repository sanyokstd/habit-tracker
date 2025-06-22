import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  content: {
    padding: 20,
    paddingBottom: 150,
  },
  formBlock: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: theme.colors.onBackground,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
