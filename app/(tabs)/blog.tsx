import { View, Text, StyleSheet } from 'react-native';

export default function Blog() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Блог</Text>
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
