import {StyleSheet} from 'react-native';
import {theme} from 'theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
  day: {
    padding: 5,
    borderRadius: 10,
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  activeDay: {
    backgroundColor: theme.colors.primary,
  },
  text: {
    textAlign: 'center',
    color: theme.colors.primary,
  },
  textActive: {
    color: theme.colors.background,
  },
});
