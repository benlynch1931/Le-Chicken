import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

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
      ></TextInput>
    </View>
  )

}
export default AttackCommands;
