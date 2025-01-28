import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { router } from 'expo-router';

export const Header = () => {
  const { t } = useTranslation();
  const { s, theme } = useTheme(styles);
  const handleOpenSettings = () => {
    router.push('/settings');
  };

  return (
    <View style={s.header}>
      <TouchableOpacity onPress={handleOpenSettings}>
        <Ionicons name="settings-outline" size={30} color={theme.colors.onBackground} />
      </TouchableOpacity>

      <View style={s.logo}>
        <Text style={s.text}>{t('be')}</Text>
        <Text style={[s.text, s.textPrimary]}>{t('better')}</Text>
      </View>

      <View style={s.right}>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={35} color={theme.colors.onBackground} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
