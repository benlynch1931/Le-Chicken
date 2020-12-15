import React, { useState } from 'react';
import { View } from 'react-native';
import GameContextProvider from './src/contexts/GameContext.js';
import Game from './src/Game.js'
import Menu from './src/Menu.js'
import SoundController from './src/SoundController.js'

export default function App() {

  const [view, setView] = useState('menu')

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
