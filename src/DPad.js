import React, { useContext } from 'react';
import { TextInput, Text, View, TouchableOpacity, Button, StyleSheet, Keyboard } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DPad = () => {
  const { addToDictionary, changeInputText, changeCoopGraphic, inputText, changeLevel, level, changeChickenToMove, changeChickenDirection, chickenDirection } = useContext(GameContext)

  const directions = new Map()
  directions.set('haut', 'up')
  directions.set('bas', 'down')
  directions.set('droite', 'right')
  directions.set('gauche', 'left')


  // const checkInput = (text) => {
  //   changeInputText(text)
  //   if (level === 0 && text.toLowerCase() === "marcher") {
  //     Keyboard.dismiss();
  //     changeLevel(1)
  //     sendToDictionary('Marcher', 'To walk');
  //     changeChickenToMove(90);
  //     changeInputText("")
  //   }

  //   if (level === 1 && text.toLowerCase() === "ouvrir") {
  //     Keyboard.dismiss();
  //     changeLevel(2);
  //     sendToDictionary('Ouvrir', 'To open');
  //     sendToDictionary('Haut', 'Up');
  //     sendToDictionary('Bas', 'Down');
  //     sendToDictionary('Gauche', 'Left');
  //     sendToDictionary('Droite', 'Right');
  //     changeChickenToMove(27);
  //     changeInputText("");
  //   }

  //   if (level === 2) {
  //     for (const [french, english] of directions.entries()) {
  //       if (text.toLowerCase() == french) {
  //         changeChickenDirection(english);
  //         changeChickenToMove(100);
  //         changeInputText("");
  //       }
  //     }
  //   }
  // }
  let chickenMoving = false

  const moveChicken = (direction, num) => {
    chickenMoving = true
    if(chickenMoving == true){
      changeChickenDirection(direction)
      changeChickenToMove(num)
    }
  }

  return (
    < View style={styles.container} >
      {/* <TextInput style={styles.input}
        placeholderTextColor="black"
        testID="textInput"
        onChangeText={checkInput}
        value={inputText} */}
      {/* /> */}
      {/* <Button
          onPressIn={debugMe()}
          onPressOut={debugMe()}
          title="HAUT"
          color="#841584"
        /> */}
      <TouchableOpacity onPressIn={ () => moveChicken('up', 1)} onPressOut={ () => {chickenMoving = false}}>
        <Text>HAUT</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: wp('100%'),
  }
  // input: {
  //   width: wp("40%"),
  //   fontSize: 20,
  //   borderWidth: 2,
  //   borderColor: 'grey',
  //   padding: 10,
  //   borderRadius: 5,
  //   textAlign: "center",
  //   alignSelf: "center"
  // }
});
export default DPad;