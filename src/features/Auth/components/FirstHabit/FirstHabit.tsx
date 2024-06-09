import {styles as s} from 'features/Auth/styles';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {userStore} from 'store/userStore';
import {FormValues} from './interface';
import {HabitInfoView} from './HabitInfoView';
import {IHabitDays} from 'types/habits';
import {FC, useState} from 'react';
import {DaysView} from './DaysView';
import {StepProps} from 'features/Auth/interface';

const schema = Yup.object().shape({
  habitName: Yup.string()
    .required('habit name is required')
    .min(3, 'habit name must be at least 3 characters long'),
  habitDescription: Yup.string().optional(),
});

const defaultValues: FormValues = {
  habitName: '',
  habitDescription: '',
  days: {
    monday: true,
    tuesday: false,
    wednesday: true,
    thursday: false,
    friday: true,
    saturday: false,
    sunday: true,
  },
};

const FirstHabit: FC<StepProps> = ({handleNext}) => {
  const [showDays, setShowDays] = useState(false);
  const {createHabit} = userStore();

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const days = watch('days');
  const habitName = watch('habitName');
  const handleDayChange = (newDays: IHabitDays) => {
    setValue('days', newDays);
  };
  const daysInTrue = Object.values(days).filter(day => day).length;

  const onSubmit: SubmitHandler<FormValues> = data => {
    createHabit({
      name: data.habitName,
      description: data.habitDescription || '',
      days: data.days,
    });
    handleNext();
  };

  return (
    <>
      <View style={s.wrapper}>
        {!showDays ? <HabitInfoView control={control} errors={errors} /> : null}
        {showDays ? (
          <DaysView days={days} handleDayChange={handleDayChange} />
        ) : null}
      </View>
      {!showDays ? (
        <Button
          mode="contained"
          uppercase
          disabled={habitName.length < 3}
          onPress={() => setShowDays(true)}>
          Next
        </Button>
      ) : null}
      {showDays ? (
        <Button
          mode="contained"
          uppercase
          disabled={daysInTrue < 1}
          onPress={handleSubmit(onSubmit)}>
          Next
        </Button>
      ) : null}
    </>
  );
};

export {FirstHabit};
