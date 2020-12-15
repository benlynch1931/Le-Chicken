import React, { useEffect, useContext } from 'react';
import { Button, View } from 'react-native';
import { Audio } from 'expo-av';
import { GameContext } from './contexts/GameContext.js';

export default function SoundController(props) {
  const { currentScene }  = useContext(GameContext);
  const [sound, setSound] = React.useState();
  const [musicPlaying, setMusicPlaying] = React.useState(false);
  let soundFile;
  let battlePlaying = false

  useEffect(() => {
    if(currentScene == 'battle' && musicPlaying && battlePlaying == false) {
      startMusic()
      battlePlaying = true
    }
  }, [currentScene])

  async function startMusic() {

    if (currentScene == 'battle') {
      soundFile = require('../assets/Battle1.mp3')
    } else {
      soundFile = require('../assets/feeling-good.mp3')
    }
    const { sound } = await Audio.Sound.createAsync(
      soundFile
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

  const musicButtonText = () => {
    if (musicPlaying) {
      return "Music: On"
    } else {
      return "Music: Off"
    }
  }

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const button = () => {
    if (props.view == 'menu') {
      return <Button title={musicButtonText()} onPress={toggleMusic} />
    }
  }

  if (props.view != 'menu') return null;
  return (
    <View>
      { button()}
    </View>
  )

};
