import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AttackCommands = (props) => {
  const [inputText, setInputText] = useState("")

  const checkInput = (text) => {
    setInputText(text)
    if (text.toLowerCase() == "frapper") {
        setInputText("")
        props.setOpponentHealth(props.opponentHealth - (Math.floor(Math.random() * 6) + 5))
    }
  }

  return (
    <View>
      <Text>Frapper</Text>
      <TextInput
      placeholderTextColor="black"
      testID="textInput"
      onChangeText={checkInput}
      value={inputText}
      style={styles.input}
      ></TextInput>
    </View>
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

export default AttackCommands;
