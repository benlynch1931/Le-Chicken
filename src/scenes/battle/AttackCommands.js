import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BattleContext } from '../../contexts/BattleContext.js';

const AttackCommands = () => {
  const { chickenHealth, changeResult, opponentHealth, inputText, battleReport, changeBattleReport, chickenTurn, result, displayResult, changeChickenTurn, changeOpponentHealth, changeChickenHealth, changeInputText } = useContext(BattleContext)

  const checkInput = (text) => {
    if (result !== ""){return}
    changeInputText(text)
    if(chickenTurn == true) {
        console.log(chickenHealth, opponentHealth)
        if (text.toLowerCase() == "frapper") {
            changeInputText("")
            chickenAttack()
        }
    }  
  }

  const chickenAttack = () => {
    changeOpponentHealth(Math.floor(Math.random() * 6) + 20)
    changeBattleReport("Le chicken a frappé l’adversaire")
    checkHealth()
    changeChickenTurn()
    opponentTurn()
  }

  const opponentTurn = () => {
    if (result !== ""){return}
    setTimeout(() => {
      changeChickenHealth(Math.floor(Math.random() * 6) + 20)
      changeBattleReport("L’adversaire a frappé le chicken")
      checkHealth()
      changeChickenTurn()
    }, 2000)
  }

  const checkHealth = () => {
      if(chickenTurn) {
        if(opponentHealth <= 20) {
            changeResult("You won!")

        }
      }else {
          if(props.chickenHealth <= 20) {
            changeResult("You lost")
          }
      }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.hintText}>Hint: Frapper</Text>
      <Text style={styles.hintText}>{`${battleReport}`}</Text>
      <Text style={styles.hintText}>{`${result}`}</Text>
      <TextInput style={styles.input}
      placeholderTextColor="black"
      testID="textInput"
      onChangeText={checkInput}
      value={inputText}
      ></TextInput>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: wp('100%'),
  },
  hintText: {
    alignSelf: "center",
    padding: hp("2%")
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

export default AttackCommands;
