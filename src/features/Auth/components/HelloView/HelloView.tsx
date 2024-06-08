import {View} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import {styles as s} from 'features/Auth/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FC} from 'react';
import {StepProps} from 'features/Auth/interface';

const HelloView: FC<StepProps> = ({handleNext}) => {
  const theme = useTheme();
  return (
    <>
      <View style={s.wrapper}>
        <View style={s.wrapCenter}>
          <Icon name="wordpress" size={70} color={theme.colors.primary} />
        </View>
        <Text style={s.text} variant="headlineSmall">
          The habit tracker is your first step towards improving your life.
        </Text>
        <Text style={s.text} variant="titleMedium">
          "Big changes start with small habits!"
        </Text>
      </View>

      <Button mode="contained" uppercase onPress={handleNext}>
        Let's start!
      </Button>
    </>
  );
};

export {HelloView};
