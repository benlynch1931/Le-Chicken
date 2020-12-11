import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import SceneController from './SceneController.js';
import Chicken from './Chicken.js'
//import move from './utils/Move'

const GameController = () => {



  return (
    <GameContext.Consumer>{(context) => {

      const { changeChickenGraphic, increaseChickenPositionY, resetChickenPosition, changeScene, changeInputText, inputText, hint, changeHint } = context;


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
            _finishMovement(direction, chickenWalk)
            return
          }
          _moveIncrement();
          distance--;
        }, 30)
      }

      const _moveIncrement = (direction) => {
        increaseChickenPositionY(-5)
      }

      const _finishMovement = (direction, chickenWalk) => {
        clearInterval(chickenWalk)
        handleChickenGraphic(direction, 'idle');
      }

      const checkInput = (text) => {
        changeInputText(text)
        if (hint === "Pour marcher: Type ‘marcher’" && text.toLowerCase() === "marcher") {
          move('up', 70);
          changeInputText("")
          changeHint("Pour ouvrir: Type 'ouvrir'")
        }
        if (hint === "Pour ouvrir: Type 'ouvrir'" && text.toLowerCase() === "ouvrir") {
          move('up', 20)
          changeInputText("");
        }
      }

      return (
        < View style={{
          position: 'absolute',
        }} >
          <Text style={styles.hintText}>Hint: {hint}</Text>
          <TextInput style={styles.input}
            placeholderTextColor="black"

            onChangeText={checkInput}
            value={inputText}
          />
          <SceneController />
          <Chicken />
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