import { View, Text } from 'react-native';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const MenuBlock = ({ title, children }: Props) => {
  const { s } = useTheme(styles);
  return (
    <View style={s.view}>
      <Text style={s.title}>{title}</Text>
      <View style={s.wrap}>{children}</View>
    </View>
  );
};
