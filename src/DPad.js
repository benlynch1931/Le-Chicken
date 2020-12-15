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
    this.context.changeChickenToMove(1)
    this.t = setTimeout(this.repeat, 5)
  }

  startLoop() {
    this.context.changeLoop(true);
    // this.context.changeNeedToUpdateChickenGraphic(true);
    this.repeat()
  }

  stopLoop() {
    this.context.changeLoop(false);
    this.context.changeChickenToMove(0);
    // this.context.changeNeedToUpdateChickenGraphic(true);
    clearTimeout(this.t)
  }

  render() {
    return (
      < View style={styles.container} >
        <TouchableOpacity
          onPressIn={() => { this.context.changeChickenDirection('up'); this.startLoop(); }}
          onPressOut={() => { this.stopLoop(); }}>
          <Text>HAUT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => { this.context.changeChickenDirection('down'); this.startLoop(); }}
          onPressOut={() => { this.stopLoop(); }}>
          <Text>BAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => { this.context.changeChickenDirection('right'); this.startLoop(); }}
          onPressOut={() => { this.stopLoop(); }}>
          <Text>DROITE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => { this.context.changeChickenDirection('left'); this.startLoop(); }}
          onPressOut={() => { this.stopLoop(); }}>
          <Text>GAUCHE</Text>
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
});