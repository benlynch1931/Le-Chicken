import React, { useEffect, useContext } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BattleContext } from '../../contexts/BattleContext.js'

const BattleChicken = () => {
  const { battleChickenPosition, chickenHealth, changeBattleChickenPosition, battleReport } = useContext(BattleContext)
  const chickenWidth = wp("30%")
  const chickenHeight = hp("15.16%")
  let entrance;
  let stepSize = "1%"
  let chickenSurge;

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
    if(battleReport === "Le chicken a frappé l’adversaire") {
        chickenSurge = setInterval(() => {
            counter = counter + 1
            if(counter < 4) {
              changeBattleChickenPosition(wp(stepSize), 0)
            } else {
              console.log("moving back")
              changeBattleChickenPosition(-wp(stepSize), 0)
              changeBattleChickenPosition(-wp(stepSize), 0)
              changeBattleChickenPosition(-wp(stepSize), 0)
              // return () => {
                clearInterval(chickenSurge)
              // }
            }
        }, 25)
    }

  }, [battleReport])

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
