import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Game from './src/Game.js'
import Menu from './src/Menu.js'

export default function App() {

  const [screen, setScreen] = useState('menu')

  const currentScreen = () => {
    switch (screen) {
      case 'menu':
        return <Menu setScreen={setScreen} />;
      case 'game':
        return <Game setScreen={setScreen} />;
    }
  }

  return (
    <View>
      {currentScreen()}
    </View>
  );
};
