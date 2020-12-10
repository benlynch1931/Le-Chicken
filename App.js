import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Chicken from './src/Chicken.js'
import Coop from './src/Coop.js'

export default function App() {
  const [chickenTop, setChickenTop] = useState(450)
  const [chickenGraphic, setChickenGraphic] = useState("right")

  const checkInput = (text) => {
    if (text.toLowerCase() === "marcher") {
      walkUp();
    }
  }

  const walkUp = () => {
    let counter = 0
    setChickenGraphic(chickenGraphic => chickenGraphic = 'walkUp')
    let chickenWalk = setInterval(() => {
      if (counter < 90) {
        setChickenTop(chickenTop => chickenTop - 5)
        counter = counter + 1
      } else {
        clearInterval(chickenWalk)
      }
      console.log("counter:" + counter)
      console.log("CT:" + chickenTop)
    }, 30)
  }

  return (
    <View style={styles.container}>
      <Coop></Coop>
      <Chicken chickenTop={chickenTop} chickenGraphic={chickenGraphic} />
      <TextInput style={styles.input}
        placeholder="Type Marcher"
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
    // justifyContent: 'center',
  },
  input: {
    zIndex: 3,
    top: 580,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5
  }
});
