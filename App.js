import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chicken from './src/Chicken.js'
import Coop from './src/Coop.js'

export default function App() {
  const [chickenTop, setChickenTop] = useState(100)
  return (
    <View style={styles.container}>
      <Text>Le Chicken!</Text>
      <StatusBar style="auto" />
      <Coop></Coop>
      <Chicken>chickenTop={chickenTop}</Chicken>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
