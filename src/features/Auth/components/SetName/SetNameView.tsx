// NameForm.tsx
import React from 'react';
import {View} from 'react-native';
import {Button, HelperText, Text, TextInput} from 'react-native-paper';
import {Controller, Control, FieldErrors} from 'react-hook-form';
import {styles as s} from 'features/Auth/styles';

interface FormValues {
  name: string;
}

interface NameFormProps {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
  handleSubmit: () => void;
}

const SetNameView: React.FC<NameFormProps> = ({
  control,
  errors,
  handleSubmit,
}) => {
  return (
    <>
      <View style={s.wrapper}>
        <Text style={s.text} variant="headlineSmall">
          Please enter your name
        </Text>

        <Controller
          control={control}
          name="name"
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <TextInput
                mode="outlined"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={!!errors.name}
              />
              {errors.name && (
                <HelperText type="error">{errors.name.message}</HelperText>
              )}
            </View>
          )}
        />
      </View>

      <Button mode="contained" uppercase onPress={handleSubmit}>
        Next
      </Button>
    </>
  );
};

export {SetNameView};
