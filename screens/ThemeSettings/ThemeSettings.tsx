import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { DetailHeader, MenuBlock, ModalHeader } from '@/components';
import { View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export function ThemeSettings() {
  const { s } = useTheme(styles);

  return (
    <SafeAreaView style={s.area}>
      <DetailHeader title="Theme" />
      <View style={s.content}>
        <MenuBlock title="Mode">
          <></>
        </MenuBlock>
      </View>
    </SafeAreaView>
  );
}
