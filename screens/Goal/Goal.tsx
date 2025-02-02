import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { DetailHeader, MenuBlock, SelectItem } from '@/components';
import { useTranslation } from 'react-i18next';
import { View, Text as RNText, TextInput as RNTextInput } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import { HabitFormData } from '@/types/habits';
import { TextInput } from 'react-native-paper';
import { useRef, useState } from 'react';
import React from 'react';

export function Goal() {
  const { s, theme } = useTheme(styles);
  const { t } = useTranslation();
  const {
    control,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext<HabitFormData>();
  const goal = watch('goal');
  const isGoalIsCustom = goal !== 0 && goal !== 7 && goal !== 30 && goal !== 365;
  const [isCustom, setIsCustom] = useState(isGoalIsCustom);
  const inputRef = useRef<RNTextInput>(null);

  const handleSelect = (value: number) => {
    if (value < 0) return; // Не встановлюємо від’ємні значення
    setValue('goal', value);
    setIsCustom(false);
  };

  const handleSetIsCustom = () => {
    setIsCustom(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleBlur = async () => {
    await trigger('goal');
  };

  const handleChangeText = (text: string) => {
    const regex = /^[0-9]*$/;
    if (regex.test(text) || text === '') {
      setValue('goal', Number(text));
    }
  };

  return (
    <SafeAreaView style={s.area}>
      <DetailHeader title={'Goal'} />
      <View style={s.content}>
        <MenuBlock title="Кількість днів">
          <SelectItem title="none" onPress={() => handleSelect(0)} isActive={!isCustom && goal === 0} />
          <SelectItem title="7 днів" onPress={() => handleSelect(7)} isActive={!isCustom && goal === 7} />
          <SelectItem title="30 днів" onPress={() => handleSelect(30)} isActive={!isCustom && goal === 30} />
          <SelectItem title="365 днів" onPress={() => handleSelect(365)} isActive={!isCustom && goal === 365} />
          <SelectItem title="Інша ціль" onPress={handleSetIsCustom} isActive={isCustom} withDivider={false} />
          {isCustom && (
            <>
              <Controller
                control={control}
                name="goal"
                defaultValue={0}
                rules={{
                  required: 'Введіть кількість днів',
                  min: { value: 0, message: 'Мінімальне значення - 0' },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    ref={inputRef}
                    outlineColor={theme.colors.onBackground}
                    mode="outlined"
                    value={value !== undefined ? String(value) : ''}
                    keyboardType="numeric"
                    onChangeText={handleChangeText}
                    onBlur={handleBlur}
                    error={!!errors.goal}
                    maxLength={10}
                  />
                )}
              />
              {errors.goal && <RNText style={{ color: theme.colors.error }}>{errors.goal.message}</RNText>}
            </>
          )}
        </MenuBlock>
      </View>
    </SafeAreaView>
  );
}
