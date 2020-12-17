import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import UserTextInput from './UserTextInput.js'
import Hint from './Hint.js'
import { GameContext } from './contexts/GameContext.js';

export class TextController extends Component {
  constructor() {
    super();
  }

  static contextType = GameContext;

  render() {
    const { currentScene, changeInputText, inputText, hint, changeHint, changeLevel, level, changeChickenMoving, changeChickenDirection } = this.context
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        width: wp('100%'),
      }
    });

    if (currentScene == 'battle') {
      return null
    }

    return (
      < View style={styles.container} >
        <Hint />
        <UserTextInput />
      </View >
    )
  }
}

export default TextController;
