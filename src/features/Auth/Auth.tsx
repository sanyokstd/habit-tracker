import {useState} from 'react';
import {FirstHabit, HelloView, SetName} from './components';
import {styles as s} from 'features/Auth/styles';
import {View} from 'react-native';

const steps = {
  HELLO: 'HelloView',
  SET_NAME: 'SetNameView',
  FIRST_HABIT: 'FirstHabitView',
};

const Auth = () => {
  const [step, setStep] = useState(steps.HELLO);

  return (
    <View style={s.container}>
      {step === steps.HELLO && (
        <HelloView handleNext={() => setStep(steps.SET_NAME)} />
      )}
      {step === steps.SET_NAME && (
        <SetName handleNext={() => setStep(steps.FIRST_HABIT)} />
      )}
      {step === steps.FIRST_HABIT && <FirstHabit />}
    </View>
  );
};

export {Auth};
