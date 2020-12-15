import React, { useEffect, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View } from 'react-native';
import Coop from './scenes/Coop.js';
import Maze from './scenes/Maze.js';
import Battle from './scenes/battle/Battle.js';
import Confrontation from './scenes/Confrontation.js'
import { GameContext } from './contexts/GameContext.js';

const SceneController = () => {
  const { currentScene, chickenPosition, changeScene, resetChickenPosition } = useContext(GameContext)
  let scene;

  useEffect(() => {
    if (chickenPosition[1] <= hp("5%")) {
      changeScene('maze')
      resetChickenPosition()
    }
  }, [chickenPosition])

  if (currentScene === 'coop') {
    scene = <Coop />
  } else if (currentScene === 'maze') {
    scene = <Maze />
  } else if (currentScene === 'battle') {
    scene = <Battle />
  } else if (currentScene === 'confrontation') {
    scene = <Confrontation/>
  }

  return (
    < View >
      { scene }
    </View >
  )
}


export default SceneController
