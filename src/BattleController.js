import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import BattleOpponent from './BattleOpponent.js'
import BattleChicken from './BattleChicken.js'
import AttackCommands from './AttackCommands.js'
import BattleView from './scenes/BattleView.js'
import HealthBar from './HealthBar.js'

const BattleController = (props) => {
  const [chickenHealth, setChickenHealth] = useState(100)
  const [opponentHealth, setOpponentHealth] = useState(100)

  return (
    <View>
      <HealthBar health={chickenHealth}/>
      <BattleChicken></BattleChicken>
      <HealthBar health={opponentHealth}/>
      <BattleOpponent></BattleOpponent>
      <BattleView></BattleView>

      <AttackCommands
      chickenHealth={chickenHealth}
      setChickenHealth={setChickenHealth}
      opponentHealth={opponentHealth}
      setOpponentHealth={setOpponentHealth}></AttackCommands>
    </View>
  )

}
export default BattleController;
