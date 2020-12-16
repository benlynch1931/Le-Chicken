import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BattleContext } from '../../contexts/BattleContext.js'
import { Audio } from 'expo-av';

const FenceOpponent = () => {
  const { opponentPosition, battleReport, changeOpponentPosition } = useContext(BattleContext)
  const opponentWidth = wp("100%")
  const opponentHeight = hp("6.16%")
  let opponentSurge;
  let entrance;
  let stepSize = "1%"
  const [sound, setSound] = React.useState()
  const opponents = {
  }


  useEffect(() => {
    if(opponentPosition[0] > wp("1%")) {
        entrance = setInterval(() => {
            changeOpponentPosition(-wp(stepSize), 0)
        }, 80)
        return () => {
            clearInterval(entrance)
        }
    }
  }, [opponentPosition])

  useEffect(() => {
    let counter = 0
    if(battleReport === "La cloture attend…") {
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
        top: hp("20%"),
        left: wp(opponentPosition),
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
