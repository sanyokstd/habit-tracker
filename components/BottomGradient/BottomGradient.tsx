import { LinearGradient } from 'expo-linear-gradient';
import { useThemeContext } from '@/theme/ThemeContext';
import { useTheme } from '@/hooks/useTheme';
import { styles } from './styles';

export const BottomGradient = () => {
  const { s } = useTheme(styles);
  const { theme } = useThemeContext();

  const gradientLight = ['transparent', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)'];
  const gradientDark = ['transparent', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)'];
  const gradient = theme.dark ? gradientDark : gradientLight;
  return (
    <LinearGradient style={s.gradient} colors={[gradient[0], gradient[1], gradient[2], gradient[3]]}></LinearGradient>
  );
};
