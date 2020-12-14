import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import { Audio } from 'expo-av'

export default function SoundController(props) {

  const [sound, setSound] = React.useState();
  const [musicPlaying, setMusicPlaying] = React.useState(false);

  async function startMusic() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/feeling-good.mp3')
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
