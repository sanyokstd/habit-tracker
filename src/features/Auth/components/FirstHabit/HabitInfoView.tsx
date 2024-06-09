import {View} from 'react-native';
import {styles as s} from 'features/Auth/styles';
import {HelperText, Text, TextInput} from 'react-native-paper';
import {Control, Controller, FieldErrors} from 'react-hook-form';
import {FC} from 'react';
import {FormValues} from './interface';

interface HabitInfoViewProps {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

const HabitInfoView: FC<HabitInfoViewProps> = ({control, errors}) => {
  return (
    <>
      <View>
        <Text style={s.text} variant="headlineSmall">
          Create your first habit
        </Text>
      </View>

      <Controller
        control={control}
        name="habitName"
        render={({field: {onChange, onBlur, value}}) => (
          <View>
            <TextInput
              label="Name of your first habit"
              mode="outlined"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={!!errors.habitName}
            />
            {errors.habitName && (
              <HelperText type="error">{errors.habitName.message}</HelperText>
            )}
          </View>
        )}
      />
      <Controller
        control={control}
        name="habitDescription"
        render={({field: {onChange, onBlur, value}}) => (
          <View>
            <TextInput
              mode="outlined"
              label="Description (optional)"
              value={value}
              multiline
              numberOfLines={3}
              maxLength={200}
              onBlur={onBlur}
              onChangeText={onChange}
            />
            <HelperText type="info">
              A brief description of the actions to be performed. For example,
              follow a certain training plan, read at least 5 pages etc.
            </HelperText>
          </View>
        )}
      />
    </>
  );
};

export {HabitInfoView};
