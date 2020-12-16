import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BattleContext } from '../../contexts/BattleContext.js';
import { GameContext } from '../../contexts/GameContext.js';

const AttackCommands = () => {
  const { changeLevel, changeScene, level } = useContext(GameContext)
  const { chickenHealth, changeResult, opponentHealth, inputText, battleReport, changeBattleReport, chickenTurn, result, changeChickenTurn, changeOpponentHealth, changeChickenHealth, changeInputText } = useContext(BattleContext)
  let winner = false;
  const checkInput = (text) => {
    if (winner) {return}
    changeInputText(text)
    if(chickenTurn == true) {
        if (text.toLowerCase() == "frapper") {
            changeInputText("")
            chickenAttack()
        }
    }
  }
  const chickenAttack = () => {
    // level switched for testing 5 = chicken Opponent
    if(level === 5) {
      changeOpponentHealth(Math.floor(Math.random() * 6) + 20)
      changeBattleReport("Le chicken a frappé l’adversaire")
      // checkHealth()
      // changeChickenTurn()
      chickenOpponentTurn()
    } else {
      changeBattleReport("Le chicken a frappé l’adversaire. Aie!!!")
      changeChickenHealth(Math.floor(Math.random() * 6) + 20)
      // checkHealth()
      // changeChickenTurn()
      fenceOpponentTurn()
    }
    checkHealth()
    changeChickenTurn()
  
  }
  const chickenOpponentTurn = () => {
    if (winner) { return }
    checkHealth()
    setTimeout(() => {
      changeChickenHealth(Math.floor(Math.random() * 6) + 20)
      changeBattleReport("L’adversaire a frappé le chicken")
      changeChickenTurn()
    }, 2000)
  }

  const fenceOpponentTurn = () => {
    setTimeout(() => {
      changeBattleReport("La cloture attend…")
      changeChickenTurn()
    }, 2000)
  }
  const checkHealth = () => {
    if(opponentHealth <= 20) {
      winner = true
      changeResult("You won!")
      setTimeout(() => {
        changeLevel(5)
        changeScene('confrontation')
      }, 3000)
      return;
    } else if(chickenHealth <= 20) {
      winner = true;
      changeResult("You lost")
      return;
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
    padding: hp("2%")
  },
  hintText: {
    alignSelf: "center",
    paddingBottom: hp("1%")
  },
  input: {
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
export default AttackCommands;