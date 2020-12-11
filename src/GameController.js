import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GameContext } from './contexts/GameContext.js';


const GameController = () => {



  return (
    <GameContext.Consumer>{(context) => {
      const { changeInputText, inputText, hint, changeHint, changeLevel } = context;

      const checkInput = (text) => {
        changeInputText(text)
        if (hint === "Pour marcher: Type ‘marcher’" && text.toLowerCase() === "marcher") {
          changeLevel(1)
          changeInputText("")
          changeHint("Pour ouvrir: Type 'ouvrir'")
        }

        if (hint === "Pour ouvrir: Type 'ouvrir'" && text.toLowerCase() === "ouvrir") {
          changeLevel(2)
          changeInputText("");
        }
      }

      return (
        < View style={styles.container} >
          <Text style={styles.hintText}>Hint: {hint}</Text>
          <TextInput style={styles.input}
            placeholderTextColor="black"

            onChangeText={checkInput}
            value={inputText}
          />
        </View >
      )
    }}

    </GameContext.Consumer>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
  },
  input: {
    zIndex: 3,
    width: 150,
    top: 600,
    position: 'absolute',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    alignSelf: "center"
  },
  hintText: {
    zIndex: 3,
    top: 560,
    position: 'absolute',
    alignSelf: "center"
  }
});

export default GameController;