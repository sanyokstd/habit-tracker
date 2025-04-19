import { DetailHeader, MenuBlock, SelectItem } from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { HabitFormData } from '@/types/habits';
import React, { useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TextInput as RNTextInput, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

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
    if (value < 0) return;
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
      <DetailHeader title={t('Goal.title')} />
      <View style={s.content}>
        <MenuBlock title={t('Goal.quantityDays')}>
          <SelectItem
            title={t('Goal.none')}
            onPress={() => handleSelect(0)}
            isActive={!isCustom && goal === 0}
          />
          <SelectItem
            title={`7 ${t('Goal.days')}`}
            onPress={() => handleSelect(7)}
            isActive={!isCustom && goal === 7}
          />
          <SelectItem
            title={`30 ${t('Goal.days')}`}
            onPress={() => handleSelect(30)}
            isActive={!isCustom && goal === 30}
          />
          <SelectItem
            title={`375 ${t('Goal.days')}`}
            onPress={() => handleSelect(365)}
            isActive={!isCustom && goal === 365}
          />
          <SelectItem
            title={t('Goal.another')}
            onPress={handleSetIsCustom}
            isActive={isCustom}
            withDivider={false}
          />
          {isCustom && (
            <>
              <Controller
                control={control}
                name="goal"
                defaultValue={0}
                render={({ field: { value } }) => (
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
            </>
          )}
        </MenuBlock>
      </View>
    </SafeAreaView>
  );
}
