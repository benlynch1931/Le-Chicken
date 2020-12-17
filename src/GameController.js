import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import UserTextInput from './UserTextInput.js'
import DPad from './DPad.js'
import Hint from './Hint.js'
import { GameContext } from './contexts/GameContext.js';

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
        width: wp('100%'),
      },
      battleContainer: {
        backgroundColor: '#fff',
        width: wp('100%'),
        position: 'absolute',
        marginTop: hp("66.58%")
      },
      menuBar: {
        width: wp('100%'),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: hp('1%'),
        paddingBottom: hp("1%"),
        alignSelf: 'center',
        backgroundColor: "#59c090",
      },
      menuButtonText: {
        fontFamily: 'Pixel',
        fontSize: hp('1.5%'),
        color: '#EBEBEB'
      }
    });

    const containerStyle = (currentScene == "battle") ? styles.battleContainer : styles.container

    const activateDPad = () => {
      if (currentScene == 'confrontation') {
        return (
          <DPad />
        )
      }
    }

    const activateUserInput = () => {
      if (currentScene == 'battle') {
        return null
      } else {
        return <UserTextInput />
      }
    }

    const activateHint = () => {
      if (currentScene == 'battle') {
        return null
      } else {
        return <Hint style={styles.hint} />
      }
    }

    return (
      < View style={containerStyle} >
        <View style={styles.menuBar}>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => this.props.setView('dictionary')}
          >
            <Text style={styles.menuButtonText}>Dictionary</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => this.props.setView('menu')}
          >
            <Text style={styles.menuButtonText}>Menu</Text>
          </TouchableOpacity>
        </View>
        {activateHint()}
        {activateUserInput()}
        {activateDPad()}
      </View >
    )
  }
}

export default GameController;
