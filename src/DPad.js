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

  renderButton(direction, text) {
    return <TouchableOpacity
      onPressIn={() => { this.startWalk(direction); }}
      onPressOut={() => { this.stopWalk(); }}
      style={styles.button}
    >

      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  }

  render() {
    if (this.context.currentScene == 'coop') return null;
    return (
      < View style={styles.container} >
        <View style={styles.spacer} />
        {this.renderButton('up', 'HAUT')}
        <View style={styles.spacer} />

        {this.renderButton('left', 'GAUCHE')}
        <View style={styles.spacer} />
        {this.renderButton('right', 'DROITE')}

        <View style={styles.spacer} />
        {this.renderButton('down', 'BAS')}
        <View style={styles.spacer} />
      </View >
    )
  }
}

export default DPad;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: hp('1%'),
    width: wp('47%'),
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: wp('1%')
  },
  button: {
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#6495ED',
    height: hp('5%'),
    width: wp('15%')
  },
  buttonText: {
    fontSize: hp('1.5%'),
    marginTop: hp('1.5%'),
    alignSelf: 'center',
    color: 'white'
  },
  spacer: {
    width: wp('15%'),
    height: hp('5%')
  }
});
