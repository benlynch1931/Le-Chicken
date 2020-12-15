import React, { useState } from 'react';
import { View } from 'react-native';
import BattleOpponent from './BattleOpponent.js'
import BattleChicken from './BattleChicken.js'
import AttackCommands from './AttackCommands.js'
import BattleView from './BattleView.js'
import HealthBar from './HealthBar.js'

const Battle = (props) => {
  const [chickenHealth, setChickenHealth] = useState(100)
  const [opponentHealth, setOpponentHealth] = useState(50)

  return (
    <View>
      <HealthBar character={"Chicken"} health={chickenHealth}/>
      <BattleChicken></BattleChicken>
      <HealthBar character={"Opponent"} health={opponentHealth}/>
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

export default Battle;
