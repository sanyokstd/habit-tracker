import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const Header = () => {
  const { t } = useTranslation();
  const { s, theme } = useTheme(styles);

  return (
    <View style={s.header}>
      <TouchableOpacity onPress={() => router.push('/settings')}>
        <Ionicons name="settings-outline" size={40} color={theme.colors.onBackground} />
      </TouchableOpacity>

      <View style={s.logo}>
        <Text style={s.text}>{t('be')}</Text>
        <Text style={[s.text, s.textPrimary]}>{t('better')}</Text>
      </View>

      <View style={s.right}>
        <TouchableOpacity onPress={() => router.push('/new-habit')}>
          <Ionicons name="add-circle-outline" size={40} color={theme.colors.onBackground} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
