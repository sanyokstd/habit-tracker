import { BottomGradient, ColorChip, IconChip, LinkToForm, ModalHeader } from '@/components';
import { ScrollView, Text, KeyboardAvoidingView, View, Platform } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { styles } from './styles';
import { Button, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Controller, useFormContext } from 'react-hook-form';
import { habitIconNames } from '@/constants/iconNames';
import { getColorValues } from '@/utils/getColorValues';
import { useRouter } from 'expo-router';
import { HabitFormData } from '@/types/habits';

export const NewHabit: React.FC = () => {
  const router = useRouter();
  const colors = getColorValues(false);
  const { s, theme } = useTheme(styles);
  const insets = useSafeAreaInsets();
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useFormContext<HabitFormData>();
  const goal = watch('goal');

  const onSubmit = (data: HabitFormData) => {
    console.log('Form Data:', data);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={s.keyboard}>
      <View style={[s.area, { paddingTop: insets.top }]}>
        <ModalHeader title="New habit" />
        <ScrollView contentContainerStyle={s.content}>
          <View style={s.formBlock}>
            <Text style={s.formLabel}>Name</Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  outlineColor={theme.colors.onBackground}
                  mode="outlined"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          <View style={s.formBlock}>
            <Text style={s.formLabel}>Description</Text>
            <Controller
              control={control}
              name="desc"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  outlineColor={theme.colors.onBackground}
                  mode="outlined"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          <LinkToForm
            label="Goal"
            value={goal === 0 ? 'none' : `${goal} днів`}
            onPress={() => router.push('/new-habit/goal')}
          />
          <LinkToForm label="Reminder" value="none" onPress={() => router.push('/new-habit/reminder')} />
          <View style={s.formBlock}>
            <Text style={s.formLabel}>Icon</Text>
            <View style={s.list}>
              {habitIconNames.map((item) => (
                <IconChip
                  key={item}
                  iconName={item}
                  isSelected={watch('icon') === item}
                  onPress={() => setValue('icon', item)}
                />
              ))}
            </View>
          </View>
          <View style={s.formBlock}>
            <Text style={s.formLabel}>Color</Text>
            <View style={s.list}>
              {colors.map((item) => (
                <ColorChip
                  key={item}
                  color={item}
                  isSelected={watch('color') === item}
                  onPress={() => setValue('color', item)}
                />
              ))}
            </View>
          </View>
        </ScrollView>

        <BottomGradient />
        <Button
          style={[s.saveButtonWrapper, { bottom: insets.bottom + 15 }]}
          contentStyle={s.saveButtonContent}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          textColor="#fff"
          disabled={!isValid}
        >
          SAVE
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};
