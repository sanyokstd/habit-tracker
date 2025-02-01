import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { DetailHeader, MenuBlock, SelectItem } from '@/components';
import { View } from 'react-native';
import { useTranslation, getI18n } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const languages = [
  {
    id: 'en-US',
    name: 'English',
  },
  {
    id: 'uk-UA',
    name: 'Українська',
  },
];

export function LanguageSettings() {
  const { s } = useTheme(styles);
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <SafeAreaView style={s.area}>
      <DetailHeader title={t('LanguageSettings.title')} />
      <View style={s.content}>
        <MenuBlock title={t('LanguageSettings.changeLanguage')}>
          {languages.map((lang, index) => (
            <SelectItem
              key={lang.id}
              onPress={() => changeLanguage(lang.id)}
              isActive={currentLanguage === lang.id}
              title={lang.name}
              withDivider={index !== languages.length - 1}
            />
          ))}
        </MenuBlock>
      </View>
    </SafeAreaView>
  );
}
