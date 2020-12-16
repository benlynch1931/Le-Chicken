import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BattleContext } from '../../contexts/BattleContext.js'
import { Audio } from 'expo-av';

const ChickenOpponent = () => {
  const { opponentPosition, battleReport, changeOpponentPosition } = useContext(BattleContext)
  const opponentWidth = wp("13.33%")
  const opponentHeight = hp("6.16%")
  let opponentSurge;
  let entrance;
  let stepSize = "1%"
  const [sound, setSound] = React.useState()
  const opponents = {
  }


  useEffect(() => {
    if(opponentPosition[0] > wp("16%")) {
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
    if(battleReport === "L’adversaire a frappé le chicken") {
        opponentSurge = setInterval(() => {
            counter = counter + 1
            if(counter < 4) {
              changeOpponentPosition(-wp(stepSize), 0)
            } else {
              soundFX()
              changeOpponentPosition(wp(stepSize), 0)
              changeOpponentPosition(wp(stepSize), 0)
              changeOpponentPosition(wp(stepSize), 0)
              clearInterval(opponentSurge)
            }
        }, 25)
    }

  }, [battleReport, changeOpponentPosition])

  async function soundFX() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/punch1.mp3")
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
        zIndex: 4
      }}
      nativeID={`battleOpponent`}
      source={require('../../../assets/chicken-left.png')}
    />
  );
}

export default ChickenOpponent
