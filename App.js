import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Chicken from './src/Chicken.js'
import Scene from './src/Scene.js'
import GameController from './src/GameController.js'
import GameContextProvider from './src/contexts/GameContext.js';

export default function App() {

  return (
    <View style={styles.container}>
      <GameContextProvider>
        <Scene />
        <Chicken />
        <GameController />
      </GameContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    zIndex: 3,
    top: 600,
    position: 'absolute',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5
  },
  hintText: {
    zIndex: 3,
    top: 560,
    position: 'absolute'
  }
});
