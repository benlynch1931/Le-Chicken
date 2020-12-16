import React, { useState } from 'react';
import { View } from 'react-native';
import GameContextProvider from './src/contexts/GameContext.js';
import Game from './src/Game.js'
import Menu from './src/Menu.js'
import Dictionary from './src/Dictionary.js'
import SoundController from './src/SoundController.js'
import NoteView from './src/NoteView.js'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
  'Pixel': require('./assets/fonts/PressStart2P-Regular.ttf')
  });
}

export default function App() {
  const [view, setView] = useState('menu')
  const [dataLoaded, setDataLoaded] = useState(false)
  fetchFonts()

  return (
    <View>
      <GameContextProvider>
        <Menu setView={setView} view={view} />
        <Dictionary setView={setView} view={view} />
        <Game setView={setView} view={view} />
        <SoundController view={view} />
        <NoteView view={view} setView={setView}/>
      </GameContextProvider>
    </View>
  );
};
