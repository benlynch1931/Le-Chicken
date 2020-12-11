import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import SceneController from './SceneController.js';
import Chicken from './Chicken.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import move from './utils/Move'

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
    width: wp('100%'),
  },
  input: {
    zIndex: 3,
    width: wp("40%"),
    top: hp("75%"),
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
    top: hp("70%"),
    position: 'absolute',
    alignSelf: "center"
  }
});

export default GameController;
