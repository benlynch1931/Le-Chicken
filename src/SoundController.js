import React, { useEffect, useContext } from 'react';
import { Button, View, TouchableOpacity, Text, Image } from 'react-native';
import { Audio } from 'expo-av';
import { GameContext } from './contexts/GameContext.js';

export default function SoundController(props) {
  const { currentScene }  = useContext(GameContext);
  const [sound, setSound] = React.useState();
  const [musicPlaying, setMusicPlaying] = React.useState(false);
  const [battlePlaying, setBattlePlaying] = React.useState(false);
  let soundFile;

  useEffect(() => {
    if(currentScene == 'battle' && musicPlaying && battlePlaying === false) {
      startMusic()
      setBattlePlaying(true)
    }
  }, [currentScene])

  useEffect(() => {
    if(currentScene !== 'battle' && musicPlaying && battlePlaying === true) {
      startMusic()
      setBattlePlaying(false)
    }
  }, [currentScene])

  async function startMusic() {

    if (currentScene == 'battle') {
      soundFile = require('../assets/Battle-all.mp3')
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
      return(
        <TouchableOpacity
          onPress={() => toggleMusic() }
        >
        <Text style={{fontFamily: 'Pixel', alignSelf: 'center', marginTop: 30, color: 'purple'}}>{musicButtonText()}</Text>
        </TouchableOpacity>
      )
    }
  }

  if (props.view != 'menu') return null;
  return (
    <View>
      { button()}
      <Image style={{
        marginTop: '20%'
      }}

      source={require('../assets/chickenWalkingGif.gif')}/>
    </View>
  )

};
