import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { MenuBlock, ModalHeader } from '@/components';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SettingsItem } from './SettingsItem/SettingsItem';

export function Settings() {
  const { s, theme } = useTheme(styles);
  return (
    <SafeAreaView style={s.area}>
      <ModalHeader title="Settings" />
      <View style={s.content}>
        <MenuBlock title="General">
          <SettingsItem
            title="Theme"
            icon={<Ionicons name="color-palette-outline" size={18} color="#fff" />}
            onPress={() => {
              console.log('theme');
            }}
            iconBackColor={theme.colors.primary}
          />
          <SettingsItem
            title="Language"
            icon={<Ionicons name="language-outline" size={18} color="#fff" />}
            onPress={() => {
              console.log('theme');
            }}
            iconBackColor={theme.colors.secondary}
            withDivider={false}
          />
        </MenuBlock>

        {/* <MenuBlock title="General">
          <Link href="../">Theme</Link>
          <Link href="../">Language</Link>
          <Link href="../">Privacy Policy</Link>
        </MenuBlock> */}
      </View>
    </SafeAreaView>
  );
}
