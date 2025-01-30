import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { DetailHeader, MenuBlock, SelectItem } from '@/components';
import { View } from 'react-native';

import { useThemeContext } from '@/theme/ThemeContext';

export function ThemeSettings() {
  const { s } = useTheme(styles);
  const { themeMode, setThemeMode } = useThemeContext();

  return (
    <SafeAreaView style={s.area}>
      <DetailHeader title="Theme" />
      <View style={s.content}>
        <MenuBlock title="Mode">
          <SelectItem onPress={() => setThemeMode('default')} isActive={themeMode === 'default'} title="System" />
          <SelectItem onPress={() => setThemeMode('light')} isActive={themeMode === 'light'} title="Light" />
          <SelectItem
            onPress={() => setThemeMode('dark')}
            isActive={themeMode === 'dark'}
            title="Dark"
            withDivider={false}
          />
        </MenuBlock>
      </View>
    </SafeAreaView>
  );
}
