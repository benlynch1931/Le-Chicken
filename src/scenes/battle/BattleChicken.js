import React, { useEffect, useContext, useState } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Audio } from 'expo-av';

import { BattleContext } from '../../contexts/BattleContext.js'

const BattleChicken = () => {
  const [chickenGraphic, setChickenGraphic] = useState(require('../../../assets/chicken-right.png'))
  const { battleChickenPosition, changeBattleChickenPosition, battleReport, chickenWidth, chickenHeight, changeChickenWidth, changeChickenHeight } = useContext(BattleContext)
  let entrance;
  let exit;
  let stepSize = "1%"
  let chickenSurge;
  const [sound, setSound] = React.useState()

  useEffect(() => {
    if(battleChickenPosition.x < 20) {
        entrance = setInterval(() => {
            changeBattleChickenPosition(wp(stepSize), 0)
        }, 80)
        return () => {
            clearInterval(entrance)
        }
    }
  }, [battleChickenPosition])

  async function boingSoundFX() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/boing_sound.mp3")
    )
    setSound(sound);
    await sound.playAsync();
  }


  useEffect(() => {
    let counter1 = 0
    if(battleReport === "Le chicken a sauté l’adversaire") {
      const exit = setInterval(() => {
        counter1 = counter1 + 1
        if(counter1 < 61) {
          changeBattleChickenPosition(0, -hp(stepSize))
          if(counter1 == 1) {
            boingSoundFX()
          }
        } else {
          chickenDescend()
          clearInterval(exit)
        }
      }, 10)

    }
  }, [battleReport, changeBattleChickenPosition, setChickenGraphic])

  const chickenDescend = () => {
    changeChickenWidth(wp("15%"))
    changeChickenHeight(hp("7%"))
    changeBattleChickenPosition(wp("60%"), 0)
    let counter2 = 0
    const descent = setInterval(() => {
      counter2 = counter2 + 1
      if(counter2 < 31) {
        changeBattleChickenPosition(0, hp(stepSize))
      } else {
        chickenExit()
        clearInterval(descent)
      }
    }, 10)
  }

  const chickenExit = () => {
    if(battleChickenPosition.x < 110) {
      setChickenGraphic(require('../../../assets/chicken-run-right.gif'))
      const exit = setInterval(() => {
          changeBattleChickenPosition(wp(stepSize), 0)
      }, 80)
      return () => {
          clearInterval(exit)
      }
  }
  }

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

  }, [battleReport, changeBattleChickenPosition, changeChickenWidth, changeChickenHeight])

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
        top: battleChickenPosition.y,
        left: battleChickenPosition.x,
        width: chickenWidth,
        height: chickenHeight,
        zIndex: 4,
        resizeMode: "stretch"
      }}
      nativeID={`battleChicken`}
      source={chickenGraphic}
    />
  );
}

export default BattleChicken
