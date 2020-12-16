import React, { useEffect, useContext } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BattleContext } from '../../contexts/BattleContext.js'

import { Audio } from 'expo-av';



const BattleChicken = () => {
  const { battleChickenPosition, changeBattleChickenPosition, battleReport } = useContext(BattleContext)
  const chickenWidth = wp("30%")
  const chickenHeight = hp("15.16%")
  let entrance;
  let stepSize = "1%"
  let chickenSurge;
  const [sound, setSound] = React.useState()

  useEffect(() => {
    if(battleChickenPosition[0] < 20) {
        entrance = setInterval(() => {
            changeBattleChickenPosition(wp(stepSize), 0)
        }, 80)
        return () => {
            clearInterval(entrance)
        }
    }
  }, [battleChickenPosition])

  useEffect(() => {
    let counter = 0
    if(battleReport === "Le chicken a frappé l’adversaire" || battleReport === "Le chicken a frappé l’adversaire. Aie!!!") {
        chickenSurge = setInterval(() => {
            counter = counter + 1
            if(counter < 4) {
              changeBattleChickenPosition(wp(stepSize), 0)
            } else {
              soundFX()
              changeBattleChickenPosition(-wp(stepSize), 0)
              changeBattleChickenPosition(-wp(stepSize), 0)
              changeBattleChickenPosition(-wp(stepSize), 0)
              clearInterval(chickenSurge)
            }
        }, 25)
    }

  }, [battleReport, changeBattleChickenPosition])

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
        top: hp("43%"),
        left: wp(battleChickenPosition),
        width: chickenWidth,
        height: chickenHeight,
        zIndex: 4
      }}
      nativeID={`battleChicken`}
      source={require('../../../assets/chicken-right.png')}
    />
  );
}

export default BattleChicken
