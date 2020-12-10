import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import Chicken from './src/Chicken.js'
import Scene from './src/Scene.js'

export default function App() {
  const [chickenTop, setChickenTop] = useState(450)
  const [chickenGraphic, setChickenGraphic] = useState("right")
  const [sceneSelector, setSceneSelector] = useState('coop')
  const [textInput, setTextInput] = useState("")
  const [hint, setHint] = useState("Pour marcher: Type ‘marcher’")


  const checkInput = (text) => {
    setTextInput(textInput => textInput = text)
    if (hint === "Pour marcher: Type ‘marcher’" && text.toLowerCase() === "marcher") {
      walkUp(70);
      clearText();
      setHint(hint => hint = "Pour ouvrir: Type 'ouvrir'")
    }
    if (hint === "Pour ouvrir: Type 'ouvrir'" && text.toLowerCase() === "ouvrir") {
      walkUp(20);
      clearText();
    }
  }

  const clearText = () => {
    setTextInput(textInput => textInput = "")
  }

  const walkUp = (walkCount) => {
    let counter = 0
    setChickenGraphic(chickenGraphic => chickenGraphic = 'walkUp')
    let chickenWalk = setInterval(() => {
      if (counter < walkCount) {
        setChickenTop(chickenTop => chickenTop - 5)
        counter = counter + 1
      } else {
        clearInterval(chickenWalk)
        setChickenGraphic(chickenGraphic => chickenGraphic = 'up')
        setSceneSelector('maze')
      }
    }, 30)
  }

  const clear = () => {
    console.log("cleared")
  }

  

  return (
    <View style={styles.container}>
      <Scene sceneSelector={sceneSelector} />
      <Chicken chickenTop={chickenTop} chickenGraphic={chickenGraphic} />
      <Text style={styles.hintText}>Hint: {hint}</Text>
      <TextInput style={styles.input}
        placeholderTextColor="black"

        onChangeText={checkInput}
        value={textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    zIndex: 3,
    top: 600,
    position: 'absolute',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5
  },
  hintText: {
    zIndex: 3,
    top: 560,
    position: 'absolute'
  }
});
