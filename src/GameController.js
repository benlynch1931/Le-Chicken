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
        // paddingBottom: 2
      },
      menuBar: {
        width: wp('100%'),
        // height: hp('4%'),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: hp('1%'),
        paddingBottom: hp("1%"),
        alignSelf: 'center',
        backgroundColor: "#5D8BBA",


      },
      menuButton: {
        // borderWidth: 1.5,
        // borderRadius: 12,
        // padding: 4
        // paddingLeft: 4
      },
      menuButtonText: {
        fontFamily: 'Pixel',
        fontSize: hp('1.5%'),
        color: '#EBEBEB'
      }
    });

    return (
      < View style={styles.container} >
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
        <Hint style={styles.hint} />
        <UserTextInput />
        <DPad />
      </View >
    )
  }
}

export default GameController;
