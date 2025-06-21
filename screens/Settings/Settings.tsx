import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { MenuBlock, ModalHeader } from '@/components';
import { Text, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SettingsItem } from './SettingsItem/SettingsItem';
import { useTranslation } from 'react-i18next';

export function Settings() {
  const { s, theme } = useTheme(styles);
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={s.area}>
      <ModalHeader title={t('Settings.title')} />
      <View style={s.content}>
        <MenuBlock title={t('Settings.general')}>
          <SettingsItem
            title={t('Settings.theme')}
            icon={<Ionicons name="color-palette-outline" size={18} color="#fff" />}
            onPress={() => {
              router.push('/settings/theme');
            }}
            iconBackColor={theme.colors.primary}
          />
          <SettingsItem
            title={t('Settings.language')}
            icon={<Ionicons name="language-outline" size={18} color="#fff" />}
            onPress={() => {
              router.push('/settings/language');
            }}
            iconBackColor={theme.colors.secondary}
            withDivider={false}
          />
        </MenuBlock>

        <View style={s.madeWith}>
          <Text style={s.text}>{t('Settings.madeWith')}</Text>
          <Text style={s.textLink}>
            <Link href="https://www.linkedin.com/in/olexandr-stadnik">Olexandr Stadnik</Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
