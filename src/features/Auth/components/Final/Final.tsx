import {View, Animated} from 'react-native';
import {styles as s} from 'features/Auth/styles';
import {Button, Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useEffect, useRef} from 'react';
import {userStore} from 'store/userStore';

const Final = () => {
  const theme = useTheme();
  const {setIsAuthenticated} = userStore();
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [scaleValue]);

  return (
    <>
      <View style={s.wrapper}>
        <View style={s.wrapCenter}>
          <View style={s.iconRound}>
            <Animated.View
              style={{
                transform: [
                  {
                    scale: scaleValue,
                  },
                ],
              }}>
              <Icon
                name="thumbs-up"
                size={70}
                color={theme.colors.background}
              />
            </Animated.View>
          </View>
        </View>
        <Text style={s.text} variant="headlineSmall">
          Congratulations! {'\n'} You have successfully created your first
          habit.
        </Text>
        <Text style={s.text} variant="titleMedium">
          Now you can mark each day when you did your habit.
        </Text>
      </View>
      <Button
        mode="contained"
        uppercase
        onPress={() => setIsAuthenticated(true)}>
        Go to my habits
      </Button>
    </>
  );
};

export {Final};
