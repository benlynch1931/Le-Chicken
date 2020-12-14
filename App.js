import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Audio } from 'expo-av'
import GameContextProvider from './src/contexts/GameContext.js';
import Game from './src/Game.js'
import Menu from './src/Menu.js'
import SoundController from './src/SoundController.js'

export default function App() {

  const [view, setView] = useState('game')

  return (
    <View>
      <GameContextProvider>
        <Menu setView={setView} view={view} />
        <Game setView={setView} view={view} />
        <SoundController view={view} />
      </GameContextProvider>
    </View>
  );
};
