import {StyleSheet} from 'react-native';
import {theme} from 'theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  wrapper: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  wrapCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  iconRound: {
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
});
