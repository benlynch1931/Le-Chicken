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
    // alignItems: 'center',
  },
  input: {
    zIndex: 3,
    width: 150,
    top: 600,
    left: "50%",
    marginLeft: -75,
    position: 'absolute',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    textAlign: "center"

  },
  hintText: {
    zIndex: 3,
    top: 560,
    position: 'absolute',
    alignSelf: "center"
  }
});
