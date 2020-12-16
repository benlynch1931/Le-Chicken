import React, { useContext } from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BattleContextProvider from '../../contexts/BattleContext.js'
import { GameContext } from '../../contexts/GameContext.js'

import ChickenOpponent from './ChickenOpponent.js'
import BattleChicken from './BattleChicken.js'
import AttackCommands from './AttackCommands.js'
import BattleView from './BattleView.js'
import HealthBar from './HealthBar.js'
import FenceOpponent from './FenceOpponent.js'


const Battle = () => {
  const { level } = useContext(GameContext)

  const opponent = () => {
    // Swapped levels for spiking
    if (level === 5) {
      return (
        <ChickenOpponent></ChickenOpponent>
      )
    } else if (level === 4) {
      return (
        <FenceOpponent></FenceOpponent>
      )
    }
  } 

  return (
    <View>
      <BattleContextProvider>
        <HealthBar character={"Chicken"}/>
        <BattleChicken></BattleChicken>
        { opponent() }
        <HealthBar character={"Opponent"}/>
        <BattleView></BattleView>
        <AttackCommands></AttackCommands>
      </BattleContextProvider>
    </View>
  )

}

export default Battle;
