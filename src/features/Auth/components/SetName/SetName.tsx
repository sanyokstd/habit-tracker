import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {StepProps} from 'features/Auth/interface';
import {userStore} from 'store/userStore';
import {SetNameView} from './SetNameView';
import {FormValues} from './inteface';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long'),
});

const SetName: React.FC<StepProps> = ({handleNext}) => {
  const {setUser} = userStore();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    setUser(data.name);
    handleNext();
  };

  return (
    <SetNameView
      control={control}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
};

export {SetName};
