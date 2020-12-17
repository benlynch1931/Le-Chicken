import React, { useContext, useState, Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { GameContext } from './contexts/GameContext.js';

export class DPad extends Component {
  constructor(props) {
    super(props);
    this.t = undefined
    this.startWalk = this.startWalk.bind(this)
    this.continueWalk = this.continueWalk.bind(this)
    this.stopWalk = this.stopWalk.bind(this)
    this.isClicked = false
    this.clickedButton = ''
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
    if (this.isClicked === false) {
      this.buttonStyle = styles.button
    } else if (this.isClicked === true && this.clickedButton === text) {
      this.buttonStyle = styles.buttonClicked
    } else {
      this.buttonStyle = styles.button
    }
    return <TouchableOpacity
      onPressIn={() => { this.isClicked = true; this.clickedButton = text; this.startWalk(direction); }}
      onPressOut={() => { this.isClicked = false; this.clickedButton = ''; this.stopWalk(); }}
      style={this.buttonStyle}
      activeOpacity={1}
    >

      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  }

  render() {
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
    borderColor: '#EBEBEB',
    shadowOffset: { width: wp('0.3%'), height: wp("0.3%") },
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    backgroundColor: '#59c090',
    height: hp('5%'),
    width: wp('15%')
  },
  buttonClicked: {
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#EBEBEB',
    shadowOffset: { width: wp('0.3%'), height: wp("0.3%") },
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    marginTop: wp("0.3%"),
    marginLeft: wp("0.3%"),
    backgroundColor: '#59c090',
    height: hp('5%') - wp("0.3%"), // minus the margin offset to keep other buttons in place
    width: wp('14.7%') // minus the margin offset to keep other buttons in place
  },
  buttonText: {
    fontFamily: 'Pixel',
    fontSize: hp('1%'),
    marginTop: hp('1.5%'),
    alignSelf: 'center',
    color: '#EBEBEB'
  },
  spacer: {
    width: wp('15%'),
    height: hp('5%')
  }
});
