import React, { useEffect, useContext, useState } from 'react';
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

  const [transitionOpacity, setTransitionOpacity] = useState(0)

  let scene;

  const sceneTransition = () => {
    let counter = 1
    let interval = setInterval(() => {
      if (counter < 10) {
        setTransitionOpacity(counter * 0.1)
        counter++
      } else if (counter == 10) {
        resetChickenPosition()
        changeScene('maze')
        setTransitionOpacity(1 - ((counter - 10) * 0.1))
        counter++
      } else if (counter < 20) {
        setTransitionOpacity(1 - ((counter - 10) * 0.1))
        counter++
      } else {
        clearInterval(interval)
      }
    }, 100)
  }


  useEffect(() => {
    if (chickenPosition.y <= hp("15%") && level == 2 && currentScene == 'coop') {
      sceneTransition()
    }
  }, [chickenPosition])

  useEffect(() => {
    if (chickenPosition.y <= hp("2%") && chickenPosition.x <= wp("45%") && currentScene == 'maze') {
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
    scene = <Maze setView={props.setView} view={props.view} />
  } else if (currentScene === 'battle') {
    scene = <Battle />
  } else if (currentScene === 'confrontation') {
    scene = <Confrontation setView={props.setView} view={props.view} />
  }

  return (
    < View >
      <View style={{
        position: 'absolute',
        zIndex: 10,
        backgroundColor: `rgba(0, 0, 0, ${transitionOpacity})`,
        width: wp('100%'),
        height: hp('61.58%'),
      }} />
      { scene}
      <Chicken />
    </View >
  )
}


export default SceneController
