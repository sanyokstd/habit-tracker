import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { DetailHeader, MenuBlock, SelectItem } from '@/components';
import { View } from 'react-native';

import { useThemeContext } from '@/theme/ThemeContext';
import { useTranslation } from 'react-i18next';

export function ThemeSettings() {
  const { s } = useTheme(styles);
  const { themeMode, setThemeMode } = useThemeContext();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={s.area}>
      <DetailHeader title={t('ThemeSettings.title')} />
      <View style={s.content}>
        <MenuBlock title={t('ThemeSettings.mode')}>
          <SelectItem
            onPress={() => setThemeMode('default')}
            isActive={themeMode === 'default'}
            title={t('ThemeSettings.system')}
          />
          <SelectItem
            onPress={() => setThemeMode('light')}
            isActive={themeMode === 'light'}
            title={t('ThemeSettings.light')}
          />
          <SelectItem
            onPress={() => setThemeMode('dark')}
            isActive={themeMode === 'dark'}
            title={t('ThemeSettings.dark')}
            withDivider={false}
          />
        </MenuBlock>
      </View>
    </SafeAreaView>
  );
}
