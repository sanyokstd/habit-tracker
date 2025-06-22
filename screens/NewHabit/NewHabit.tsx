import { BottomGradient, HabitForm, ModalHeader } from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { useHabitStore } from '@/store/habitStore';
import { IHabit } from '@/types/habits';
import { useRouter } from 'expo-router';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

export const NewHabit: React.FC = () => {
  const { addHabit } = useHabitStore();
  const { t } = useTranslation();
  const router = useRouter();
  const { s } = useTheme(styles);
  const insets = useSafeAreaInsets();
  const { handleSubmit, watch } = useFormContext<IHabit>();
  const name = watch('name');

  const onSubmit = (data: IHabit) => {
    addHabit(data);
    router.back();
  };

  return (
    <View style={[s.area, { paddingTop: insets.top }]}>
      <ModalHeader title={t('NewHabit.title')} />
      <HabitForm goalRoute="/new-habit/goal" />

      <BottomGradient />
      <Button
        style={[s.saveButtonWrapper, { bottom: insets.bottom + 15 }]}
        contentStyle={s.saveButtonContent}
        mode="contained"
        onPress={handleSubmit((data) => onSubmit(data))}
        textColor="#fff"
        disabled={!name}
      >
        {t('NewHabit.save')}
      </Button>
    </View>
  );
};
