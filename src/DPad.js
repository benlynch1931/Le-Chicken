import React, { useContext, useState, Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, Button, StyleSheet, Keyboard } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class DPad extends Component {
  constructor(props) {
    super(props);
    this.t = undefined
    this.startWalk = this.startWalk.bind(this)
    this.continueWalk = this.continueWalk.bind(this)
    this.stopWalk = this.stopWalk.bind(this)
  }

  static contextType = GameContext;

  startWalk(direction) {
    this.context.changeDPadPressed(true);
    this.context.changeChickenDirection(direction);
    this.context.changeNeedToUpdateChickenGraphic(true);
    this.continueWalk()
  }

  continueWalk() {
    if (this.context.chickenToMove == 0) {
      this.context.changeChickenToMove(5)
    }
    this.t = setTimeout(this.continueWalk, 0)
  }

  stopWalk() {
    this.context.changeChickenToMove(0)
    this.context.changeDPadPressed(false);
    this.context.changeNeedToUpdateChickenGraphic(true);
    clearTimeout(this.t)
  }

  render() {
    return (
      < View style={styles.container} >
        <TouchableOpacity
          onPressIn={() => { this.startWalk('up'); }}
          onPressOut={() => { this.stopWalk(); }}>
          <Text>HAUT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => { this.startWalk('down'); }}
          onPressOut={() => { this.stopWalk(); }}>
          <Text>BAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => { this.startWalk('right'); }}
          onPressOut={() => { this.stopWalk(); }}>
          <Text>DROITE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => { this.startWalk('left'); }}
          onPressOut={() => { this.stopWalk(); }}>
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