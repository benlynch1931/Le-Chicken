import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Keyboard } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import UserTextInput from './UserTextInput.js'
import Hint from './Hint.js'
export class GameController extends Component {
  constructor() {
    super();
  }

  static contextType = GameContext;

  render() {
    const { changeInputText, inputText, hint, changeHint, currentScene, changeLevel, level, changeChickenMoving, changeChickenDirection } = this.context
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        width: wp('100%'),
      }
    });

    const activateDPad = () => {
      if(currentScene === 'maze') {
        return(
          <DPad />
        )
      }
    }

    return (
      < View style={styles.container} >
        <Hint />
        <UserTextInput />
        { activateDPad() }
      </View >
    )
  }
}

export default GameController;