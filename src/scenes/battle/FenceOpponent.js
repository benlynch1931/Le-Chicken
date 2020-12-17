import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Audio } from 'expo-av';

import { BattleContext } from '../../contexts/BattleContext.js'

const FenceOpponent = () => {
  const { opponentPosition, battleReport, changeOpponentPosition } = useContext(BattleContext)
  const opponentWidth = wp("102%")
  const opponentHeight = hp("6.16%")
  let entrance;
  let stepSize = "5.3%"
  const [sound, setSound] = React.useState()


  useEffect(() => {
    if (opponentPosition.x > 2) {
      entrance = setInterval(() => {
        changeOpponentPosition(-wp(stepSize), 0)
      }, 80)
      return () => {
        clearInterval(entrance)
      }
    }
  }, [opponentPosition])

  useEffect(() => {
    if (battleReport === "La cloture attend…") {
      whistleSoundFX()
    }

  }, [battleReport])


  async function whistleSoundFX() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/cricket_snippet.m4a")
    )
    setSound(sound);
    await sound.playAsync();
  }


  return (
    < Image
      style={{
        position: 'absolute',
        top: opponentPosition.y,
        left: opponentPosition.x,
        width: opponentWidth,
        height: opponentHeight,
        zIndex: 3
      }}
      nativeID={`fenceOpponent`}
      source={require('../../../assets/BattleFence.png')}
    />
  );
}

export default FenceOpponent
