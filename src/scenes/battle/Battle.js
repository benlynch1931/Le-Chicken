import React from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BattleContextProvider from '../../contexts/BattleContext.js'

import BattleOpponent from './BattleOpponent.js'
import BattleChicken from './BattleChicken.js'
import AttackCommands from './AttackCommands.js'
import BattleView from './BattleView.js'
import HealthBar from './HealthBar.js'


const Battle = () => {

  return (
    <View>
      <BattleContextProvider>
        <HealthBar character={"Chicken"}/>
        <BattleChicken></BattleChicken>
        <HealthBar character={"Opponent"}/>
        <BattleOpponent></BattleOpponent>
        <BattleView></BattleView>
        <AttackCommands></AttackCommands>
      </BattleContextProvider>
    </View>
  )

}

export default Battle;
