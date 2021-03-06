import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Chicken from './Chicken.js'
import GameController from './GameController.js'
import SceneController from './SceneController.js';

const Game = (props) => {
  if (props.view != 'game') return null;
  if (props.view == 'game') {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: 'white' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
        nativeID='game'
      >
        <View style={{
          height: hp("5%"),
          alignItems: 'flex-start',
          width: wp("100%"),
          padding: hp("0.8%"),
          backgroundColor: 'black',
          zIndex: 10
        }}>
        </View>
        <SceneController setView={props.setView} view={props.view} />
        <GameController setView={props.setView} />
      </KeyboardAwareScrollView >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  view: {
    height: hp("5%"),
    alignItems: 'flex-start',
    width: wp("100%"),
    padding: hp("0.8%")
  }
});

export default Game;
