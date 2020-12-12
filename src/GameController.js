import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UserTextInput from './UserTextInput.js'
import Hint from './Hint.js'

export class GameController extends Component {
  constructor(){
    super();
  }

  static contextType = GameContext;

  render() {
    const { changeInputText, inputText, hint, changeHint, changeLevel, level, changeChickenMoving, changeChickenDirection } =  this.context

    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        width: wp('100%'),
      },
      input: {
        zIndex: 3,
        width: wp("40%"),
        top: hp("75%"),
        position: 'absolute',
        fontSize: 20,
        borderWidth: 2,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 5,
        textAlign: "center",
        alignSelf: "center"
      },
      hintText: {
        zIndex: 3,
        top: hp("70%"),
        position: 'absolute',
        alignSelf: "center"
      }
    });

    return (
      < View style={styles.container} >
        <Hint/>
        <UserTextInput/>
      </View >
    )

  }

}
export default GameController;