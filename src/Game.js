import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Chicken from './Chicken.js'
import GameController from './GameController.js'
import GameContextProvider from './contexts/GameContext.js';
import SceneController from './SceneController.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Game = () => {

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: 'white' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      nativeID='game'
    >
      <GameContextProvider>

        <View style={{ height: hp("5%") }} />
        <SceneController />
        <Chicken />
        <GameController />
      </GameContextProvider>
    </KeyboardAwareScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Game;