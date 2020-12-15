import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AttackCommands = (props) => {
  const [inputText, setInputText] = useState("")
  const [battleReport, setBattleReport] = useState("")
  const [chickenTurn, setChickenTurn] = useState(true)
  const [result, setResult] = useState("")

  const checkInput = (text) => {
    if (result !== ""){return}
    setInputText(text)
    if(chickenTurn == true) {
        console.log(props.chickenHealth, props.opponentHealth)
        if (text.toLowerCase() == "frapper") {
            setInputText("")
            chickenAttack()
        }
    }  
  }

  const chickenAttack = () => {
    props.setOpponentHealth(props.opponentHealth - (Math.floor(Math.random() * 6) + 20))
    setBattleReport("Le chicken a frappé l’adversaire")
    checkHealth()
    setChickenTurn(false)
    opponentTurn()
  }

  const opponentTurn = () => {
      setTimeout(() => {
        props.setChickenHealth(props.chickenHealth - (Math.floor(Math.random() * 6) + 20))
        setBattleReport("L’adversaire a frappé le chicken")
        checkHealth()
        setChickenTurn(true)
      }, 2000)
  }

  const checkHealth = () => {
      if(chickenTurn) {
        if(props.opponentHealth <= 20) {
            setResult("You won!")

        }
      }else {
          if(props.chickenHealth <= 20) {
            setResult("You lost")
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
