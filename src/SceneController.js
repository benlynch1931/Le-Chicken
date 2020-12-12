import React, { useEffect, useContext } from 'react';
import { Image, View } from 'react-native';
import Coop from './scenes/Coop.js';
import Maze from './scenes/Maze.js';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SceneController = () => {
  const { currentScene, chickenPositionY, changeScene, resetChickenPosition } = useContext(GameContext)
  let scene;

  useEffect(() => {
    if (chickenPositionY <= hp("5%")) {
      changeScene('maze')
      resetChickenPosition()
    }
  }, [chickenPositionY])

  if (currentScene === 'coop') {
    scene = <Coop />
  } else if (currentScene === 'maze') {
    scene = <Maze />
  };

  return (
    < View style={{
      //position: 'absolute',
    }} >
      { scene}
    </View >
  )
}


export default SceneController
