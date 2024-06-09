import {useState} from 'react';
import {Final, FirstHabit, HelloView, SetName} from './components';
import {styles as s} from 'features/Auth/styles';
import {View} from 'react-native';

const steps = {
  HELLO: 'HelloView',
  SET_NAME: 'SetName',
  FIRST_HABIT: 'FirstHabit',
  FINAL: 'Final',
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
      {step === steps.FIRST_HABIT && (
        <FirstHabit handleNext={() => setStep(steps.FINAL)} />
      )}
      {step === steps.FINAL && <Final />}
    </View>
  );
};

export {Auth};
