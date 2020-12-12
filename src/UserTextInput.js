import React, { useContext } from 'react';
import { Text, TextInput, View, StyleSheet, Keyboard } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const UserTextInput = () => {
  const { changeInputText, inputText, changeLevel, level, changeChickenToMove, changeChickenDirection, chickenDirection } = useContext(GameContext)

  const directions = new Map()
  directions.set('haut', 'up')
  directions.set('bas', 'down')
  directions.set('droite', 'right')
  directions.set('gauche', 'left')

  const checkInput = (text) => {
    changeInputText(text)
    if (level === 0 && text.toLowerCase() === "marcher") {
      Keyboard.dismiss();
      changeLevel(1)
      changeChickenToMove(90);
      changeInputText("")
    }

    if (level === 1 && text.toLowerCase() === "ouvrir") {
      Keyboard.dismiss();
      changeLevel(2);
      changeChickenToMove(27);
      changeInputText("");
    }

    if (level === 2) {
      for (const [french, english] of directions.entries()) {
        if (text.toLowerCase() == french) {
          changeChickenDirection(english);
          changeChickenToMove(20);
          changeInputText("");
        }
      }
    }
  }

  return (
    < View style={styles.container} >
      <TextInput style={styles.input}
        placeholderTextColor="black"

        onChangeText={checkInput}
        value={inputText}
      />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: wp('100%'),
  },
  input: {
    width: wp("40%"),
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    alignSelf: "center"
  }
});
export default UserTextInput;