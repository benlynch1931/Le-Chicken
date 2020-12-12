import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Chicken from './src/Chicken.js'
import GameController from './src/GameController.js'
import GameContextProvider from './src/contexts/GameContext.js';
import SceneController from './src/SceneController.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {

  return (
    <GameContextProvider>
      <KeyboardAwareScrollView
        style={{ backgroundColor: 'white' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <View style={{ height: hp("5%") }} />
        <SceneController />
        <Chicken />
        <GameController />
      </KeyboardAwareScrollView >
    </GameContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
