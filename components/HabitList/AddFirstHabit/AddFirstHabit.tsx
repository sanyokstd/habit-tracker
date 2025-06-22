import { useTheme } from '@/hooks/useTheme';
import { usePreventDoublePress } from '@/hooks/usePreventDoublePress';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';

export const AddFirstHabit = () => {
  const { s } = useTheme(styles);
  const router = useRouter();
  const { t } = useTranslation();
  const { preventDoublePress } = usePreventDoublePress();

  const handleCreateHabit = () => {
    preventDoublePress(() => {
      router.push('/new-habit');
    });
  };

  return (
    <View style={s.view}>
      <Text style={s.text}>{t('AddFirstHabit.emptyList')}</Text>
      <Button mode="contained" textColor="#fff" onPress={handleCreateHabit}>
        {t('AddFirstHabit.createHabit')}
      </Button>
    </View>
  );
};
