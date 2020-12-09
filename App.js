import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Chicken from './src/Chicken.js'
import Coop from './src/Coop.js'

export default function App() {
  const [chickenTop, setChickenTop] = useState(10)
  const [chickenGraphic, setChickenGraphic] = useState("right")

  const checkInput = (text) => {
    if (text.toLowerCase() === "marche") {
      chicken.walkRight();
    }
  }

  return (
    <View style={styles.container}>
      <Text>Le Chicken!</Text>
      <StatusBar style="auto" />
      <Coop></Coop>
      <Text>2: {chickenGraphic}</Text>
      <Chicken chickenTop={chickenTop} chickenGraphic={chickenGraphic} />
      <TextInput style={styles.input}
        placeholder="Type Marche"
        placeholderTextColor="black"
        onChangeText={checkInput}
      />
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
  input: {
    zIndex: 3
  }
});
