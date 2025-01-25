import { View, Text, StyleSheet } from 'react-native';

export default function Stats() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Статистика</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
