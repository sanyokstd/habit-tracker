import { ImageBackground } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  iconButton: {
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  iconSelected: {
    backgroundColor: theme.colors.primary,
  },
});
