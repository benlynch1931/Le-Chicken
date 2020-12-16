import React, { useEffect, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View } from 'react-native';
import Coop from './scenes/Coop.js';
import Maze from './scenes/Maze.js';
import Battle from './scenes/battle/Battle.js';
import Confrontation from './scenes/Confrontation.js'
import { GameContext } from './contexts/GameContext.js';

const SceneController = (props) => {
  const { currentScene, chickenPosition, changeScene, resetChickenPosition, changeChickenToMove, changeLevel, level } = useContext(GameContext)
  let scene;

  useEffect(() => {
    if (chickenPosition.y <= hp("5%") && level == 2) {
      changeScene('maze')
      resetChickenPosition()
    }
  }, [chickenPosition])

  useEffect(() => {
    if (chickenPosition.y <= hp("10%") && chickenPosition.x <= wp("45%") && currentScene == 'maze') {
      changeScene('confrontation')
      changeChickenToMove(0)
      resetChickenPosition()
      changeLevel(4)
    }
  }, [chickenPosition])

  useEffect(() => {
    if (chickenPosition.y <= hp("15%") && currentScene == 'confrontation' && level == 6) {
      changeScene('battle')
    }
  }, [chickenPosition])

  if (currentScene === 'coop') {
    scene = <Coop />
  } else if (currentScene === 'maze') {
    scene = <Maze setView={props.setView} view={props.view}/>
  } else if (currentScene === 'battle') {
    scene = <Battle />
  } else if (currentScene === 'confrontation') {
    scene = <Confrontation setView={props.setView} view={props.view}/>
  }

  return (
    < View >
      { scene }
    </View >
  )
}


export default SceneController
