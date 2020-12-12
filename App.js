import React from 'react';
import { StyleSheet, View } from 'react-native';
import Chicken from './src/Chicken.js'
import GameController from './src/GameController.js'
import GameContextProvider from './src/contexts/GameContext.js';
import SceneController from './src/SceneController.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {

  return (
    <View style={styles.container}>
      <GameContextProvider>
        <View style={{ height: hp("5%") }} />
        <SceneController />
        <Chicken />
        <GameController />
      </GameContextProvider>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
