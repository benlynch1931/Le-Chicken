import React, { useContext } from 'react';
import { TextInput, View, StyleSheet, Keyboard } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const UserTextInput = () => {
  const { addToDictionary, currentScene, changeInputText, changeCoopGraphic, changeNeedToUpdateChickenGraphic, inputText, changeLevel, level, changeChickenToMove, changeChickenDirection, chickenDirection } = useContext(GameContext)

  const directions = new Map()
  directions.set('haut', 'up')
  directions.set('bas', 'down')
  directions.set('droite', 'right')
  directions.set('gauche', 'left')

  const sendToDictionary = (frenchWord, englishWord) => {
    addToDictionary({
      french: frenchWord,
      english: englishWord
    });
  }

  const checkInput = (text) => {
    changeInputText(text)
    if (level === 0 && text.toLowerCase() === "marcher") {
      Keyboard.dismiss();
      changeNeedToUpdateChickenGraphic(true)
      changeLevel(1)
      sendToDictionary('Marcher', 'To walk');
      changeChickenToMove(84);
      changeInputText("")
    }

    if (level === 1 && text.toLowerCase() === "ouvrir") {
      Keyboard.dismiss();
      changeNeedToUpdateChickenGraphic(true)
      changeLevel(2);
      changeChickenToMove(1);
      sendToDictionary('Ouvrir', 'To open');
      sendToDictionary('Haut', 'Up');
      sendToDictionary('Bas', 'Down');
      sendToDictionary('Gauche', 'Left');
      sendToDictionary('Droite', 'Right');
      changeInputText("");
    }

    if (level === 2 && currentScene == 'maze') {
      for (const [french, english] of directions.entries()) {
        if (text.toLowerCase() == french) {
          Keyboard.dismiss();
          changeNeedToUpdateChickenGraphic(true);
          changeChickenDirection(english);
          changeChickenToMove(100);
          changeInputText("");
        }
      }
    }
  }

  return (
    < View style={styles.container} >
      <TextInput style={styles.input}
        placeholderTextColor="black"
        testID="textInput"
        onChangeText={checkInput}
        value={inputText}
        autoCorrect={false}
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
    fontFamily: 'Pixel',
    width: wp("40%"),
    height: hp("5%"),
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    textAlign: "center",
    alignSelf: "center"
  }
});
export default UserTextInput;
