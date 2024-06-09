import {View} from 'react-native';
import {styles as s} from 'features/Auth/styles';
import {Text} from 'react-native-paper';
import {FC} from 'react';
import {HabitDaysInput} from 'components';
import {IHabitDays} from 'types/habits';

interface HabitInfoViewProps {
  days: IHabitDays;
  handleDayChange: (day: IHabitDays) => void;
}

const DaysView: FC<HabitInfoViewProps> = ({days, handleDayChange}) => {
  return (
    <>
      <View>
        <Text style={s.text} variant="headlineSmall">
          Choose days when you will do your habit
        </Text>
      </View>
      <HabitDaysInput handleChange={handleDayChange} currentActiveDays={days} />
      <Text variant="bodyMedium">
        We recommend you to choose minimum 3 days to be active.
      </Text>
    </>
  );
};

export {DaysView};
