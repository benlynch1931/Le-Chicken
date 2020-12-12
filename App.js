import React from 'react';
import { StyleSheet, View } from 'react-native';
import Chicken from './src/Chicken.js'
import GameController from './src/GameController.js'
import GameContextProvider from './src/contexts/GameContext.js';
import SceneController from './src/SceneController.js';

export default function App() {

  return (
    <View style={styles.container}>
      <GameContextProvider>
        <GameController />
        <SceneController />
        <Chicken />
      </GameContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
