import React, { useContext } from 'react';
import { TextInput, View, StyleSheet, Keyboard } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const UserTextInput = () => {
  const { changeInputText, inputText, changeLevel, level, changeChickenMoving, changeChickenDirection } = useContext(GameContext)

  const checkInput = (text) => {
    changeInputText(text)
    if (level === 0 && text.toLowerCase() === "marcher") {
      Keyboard.dismiss();
      changeLevel(1)
      changeInputText("")
    }

    if (level === 1 && text.toLowerCase() === "ouvrir") {
      Keyboard.dismiss();
      changeLevel(2)
      changeInputText("");
    }

    if (level === 2 && text.toLowerCase() === "haut") {
      Keyboard.dismiss();
      changeChickenDirection('up');
      changeChickenMoving();
      changeInputText("");
    }
  }

  return (
    < View style={styles.container} >
      <TextInput style={styles.input}
        placeholderTextColor="black"
        testID="textInput"
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