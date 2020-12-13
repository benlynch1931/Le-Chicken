import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Game from './src/Game.js'
import Menu from './src/Menu.js'

export default function App() {

  const [screen, setScreen] = useState('menu')

  const gameComponent = () => {
    if (screen == 'game') {
      return <Game />
    }
  }

  return (
    <View>
      <Menu setScreen={setScreen} />
      {gameComponent()}
    </View>
  );
};
