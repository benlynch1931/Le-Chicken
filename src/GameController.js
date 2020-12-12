import React from 'react';
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GameController = () => {

  return (
    <GameContext.Consumer>{(context) => {
      const { changeInputText, inputText, hint, changeHint, changeLevel, level, changeChickenMoving, changeChickenDirection } = context;

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
          changeHint("")
        }

        if (level === 2 && text.toLowerCase() === "haut") {
          changeChickenDirection('up');
          changeChickenMoving();
          changeInputText("");
        }
      }

      return (
        <View style={styles.container}>
          <Text style={styles.hintText}>Hint: {hint}</Text>
          <TextInput style={styles.input}
            //placeholderTextColor="black"

            onChangeText={checkInput}
            value={inputText}
          />
        </View>
      )
    }}

    </GameContext.Consumer>

  )
}

const styles = StyleSheet.create({
  container: {
    //width: wp('100%'),
    //top: hp("70%")
    //flex: 1
  },
  input: {
    //zIndex: 3,
    width: wp("40%"),
    // top: hp("75%"),
    // position: 'relative',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    alignSelf: "center",
  },
  hintText: {
    //zIndex: 3,
    //top: hp("70%"),
    //position: 'absolute',
    alignSelf: "center",
    padding: hp("2%")
  }
});

export default GameController;
