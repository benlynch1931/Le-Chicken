import React, { useEffect, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View } from 'react-native';
import Coop from './scenes/Coop.js';
import Maze from './scenes/Maze.js';
import Battle from './scenes/battle/Battle.js';
import Confrontation from './scenes/Confrontation.js'
import { GameContext } from './contexts/GameContext.js';
import Chicken from './Chicken.js'

const SceneController = (props) => {
  const { currentScene, chickenPosition, changeScene, resetChickenPosition, changeChickenToMove, changeLevel, level } = useContext(GameContext)
  let scene;

  useEffect(() => {
    if (chickenPosition.y <= hp("5%") && level == 2 && scene == 'coop') {
      changeScene('maze')
      resetChickenPosition()
    }
  }, [chickenPosition])

  useEffect(() => {
    if (chickenPosition.y <= hp("5%") && chickenPosition.x <= wp("45%") && currentScene == 'maze') {
      changeScene('confrontation')
      changeChickenToMove(0)
      resetChickenPosition()
      changeLevel(4)
    }
  }, [chickenPosition])

  if (currentScene === 'coop') {
    scene = <Coop />
  } else if (currentScene === 'maze') {
    scene = <Maze setView={props.setView} view={props.view} />
  } else if (currentScene === 'battle') {
    scene = <Battle />
  } else if (currentScene === 'confrontation') {
    scene = <Confrontation setView={props.setView} view={props.view} />
  }

  return (
    < View >
      { scene}
      <View style={{
        position: 'absolute',
        zIndex: 10,
        //backgroundColor: 'rgb(0, 0, 0)',
        width: wp('100%'),
        height: hp('61.58%'),
      }} />
      <Chicken />
    </View >
  )
}


export default SceneController
