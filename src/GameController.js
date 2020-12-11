import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
//import move from './utils/Move'

const GameController = () => {
  const [textInput, setTextInput] = useState("")
  const [hint, setHint] = useState("Pour marcher: Type ‘marcher’")



  return (
    <GameContext.Consumer>{(context) => {

      const { changeChickenGraphic, increaseChickenPositionY, resetChickenPosition, changeScene } = context;

      const loadMaze = () => {
        changeScene('maze')
        resetChickenPosition()
      }

      const handleChickenGraphic = (direction, state) => {
        if (direction == 'up' && state == 'walk') {
          changeChickenGraphic('walkUp')
        } else if (direction == 'up' && state == 'idle') {
          changeChickenGraphic('up')
        }
      }

      const move = (direction, distance, callback = (() => { })) => {
        handleChickenGraphic(direction, 'walk');

        let chickenWalk = setInterval(() => {
          if (distance <= 0) {
            _finishMovement(direction, callback, chickenWalk)
            return
          }
          _moveIncrement();
          distance--;
        }, 30)
      }

      const _moveIncrement = (direction) => {
        increaseChickenPositionY(-5)
      }

      const _finishMovement = (direction, callback, chickenWalk) => {
        clearInterval(chickenWalk)
        handleChickenGraphic(direction, 'idle');
        callback();
      }

      const checkInput = (text) => {
        setTextInput(textInput => textInput = text)
        if (hint === "Pour marcher: Type ‘marcher’" && text.toLowerCase() === "marcher") {
          move('up', 70);
          clearText();
          setHint(hint => hint = "Pour ouvrir: Type 'ouvrir'")
        }
        if (hint === "Pour ouvrir: Type 'ouvrir'" && text.toLowerCase() === "ouvrir") {
          move('up', 20, loadMaze)
          clearText();
        }
      }

      const clearText = () => {
        setTextInput(textInput => textInput = "")
      }

      return (
        < View style={{
          position: 'absolute',
        }} >
          <Text style={styles.hintText}>Hint: {hint}</Text>
          <TextInput style={styles.input}
            placeholderTextColor="black"

            onChangeText={checkInput}
            value={textInput}
          />
        </View >
      )
    }}

    </GameContext.Consumer>

  )
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

export default GameController;