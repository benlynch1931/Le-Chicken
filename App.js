import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Audio } from 'expo-av'
import Game from './src/Game.js'
import Menu from './src/Menu.js'

export default function App() {

  const [screen, setScreen] = useState('menu')
  const [sound, setSound] = React.useState();
  const [musicPlaying, setMusicPlaying] = React.useState(false);

  async function startMusic() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/feeling-good.mp3')
    );
    setSound(sound);
    await sound.playAsync();
    setMusicPlaying(true)
  }

  async function stopMusic() {
    sound.stopAsync()
    setMusicPlaying(false)
  }

  async function toggleMusic() {
    if (musicPlaying) {
      stopMusic()
    } else {
      startMusic()
    }
  }

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const currentScreen = () => {
    switch (screen) {
      case 'menu':
        return <Menu setScreen={setScreen} toggleMusic={toggleMusic} musicPlaying={musicPlaying} />;
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
