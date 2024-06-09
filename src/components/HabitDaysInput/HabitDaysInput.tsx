import {TouchableOpacity, View} from 'react-native';
import {styles as s} from './styles';
import {Text} from 'react-native-paper';
import {FC, useEffect, useState} from 'react';
import {IHabitDays} from 'types/habits';

interface IDaysListProps {
  name: string;
  value: keyof IHabitDays;
}

const daysList: IDaysListProps[] = [
  {name: 'Mo', value: 'monday'},
  {name: 'Tu', value: 'tuesday'},
  {name: 'We', value: 'wednesday'},
  {name: 'Th', value: 'thursday'},
  {name: 'Fr', value: 'friday'},
  {name: 'Sa', value: 'saturday'},
  {name: 'Su', value: 'sunday'},
];

interface HabitDaysInputProps {
  currentActiveDays?: IHabitDays;
  handleChange: (day: IHabitDays) => void;
}

const defaultActiveDays: IHabitDays = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
};

const HabitDaysInput: FC<HabitDaysInputProps> = ({
  currentActiveDays,
  handleChange,
}) => {
  const [activeDays, setActiveDays] = useState<IHabitDays>(
    currentActiveDays || defaultActiveDays,
  );
  const handleDayChange = (day: keyof IHabitDays) => {
    const newActiveDays = {...activeDays, [day]: !activeDays[day]};
    setActiveDays(newActiveDays);
    handleChange(newActiveDays);
  };

  return (
    <View style={s.container}>
      {daysList.map((day, index) => (
        <TouchableOpacity
          key={index}
          style={[s.day, activeDays[day.value] && s.activeDay]}
          onPress={() => handleDayChange(day.value)}>
          <Text
            variant="titleMedium"
            style={[s.text, activeDays[day.value] && s.textActive]}>
            {day.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export {HabitDaysInput};
