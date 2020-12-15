import React, { useContext, useState, Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, Button, StyleSheet, Keyboard } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class DPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.t = undefined
    this.repeat = this.repeat.bind(this)
    this.startLoop = this.startLoop.bind(this)
    this.stopLoop = this.stopLoop.bind(this)
  }

  static contextType = GameContext;

  repeat() {
    this.setState({ number: this.state.number + 1 })
    this.context.changeChickenToMove(6)
    this.t = setTimeout(this.repeat, 0)
  }

  startLoop() {
    this.context.changeNeedToUpdateChickenGraphic(true);
    this.repeat()
  }

  stopLoop() {
    this.context.changeNeedToUpdateChickenGraphic(true)
    clearTimeout(this.t)
  }

  // var myVar = setInterval(myTimer, 1000);
  // let direction = null

  // const myTimer = () => {
  //   changeChickenDirection(direction)
  //   changeChickenToMove(1)
  // }

  // const myStopFunction= () => {
  //   clearInterval(myVar);
  // }

  render() {
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
        <TouchableOpacity
          onPressIn={() => { this.startLoop(); }}
          onPressOut={() => { this.stopLoop(); }}>
          <Text>HAUT</Text>
        </TouchableOpacity>
      </View >
    )
  }
}

export default DPad;

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