import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import UserTextInput from './UserTextInput.js'
import DPad from './DPad.js'
import Hint from './Hint.js'
export class GameController extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = GameContext;

  render() {
    const { changeInputText, inputText, hint, changeHint, currentScene, changeLevel, level, changeChickenMoving, changeChickenDirection } = this.context
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        width: wp('100%')
      },
      menuBar: {
        width: wp('60%'),
        height: hp('3%'),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: hp('1%'),
        alignSelf: 'center'
      },
    });

    return (
      < View style={styles.container} >
        <View style={styles.menuBar}>
          <Button
            onPress={() => this.props.setView('menu')}
            title="Menu"
          />
          <Button
            onPress={() => this.props.setView('dictionary')}
            title="Dictionary"
          />
        </View>
        <Hint />
        <UserTextInput />
        <DPad />
      </View >
    )
  }
}

export default GameController;