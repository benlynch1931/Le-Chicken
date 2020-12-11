import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import Coop from './scenes/Coop.js';
import Maze from './scenes/Maze.js';
import { GameContext } from './contexts/GameContext.js';

const SceneController = (props) => {
  let scene;
  // const sceneSelector = props.sceneSelector

  // useEffect(() => {
  //   if (chickenPositionY <= 0) {
  //     changeScene("maze")
  //   }
  // }, [chickenPositionY])

  return (
    <GameContext.Consumer>{(context) => {
      const { currentScene, chickenPositionY, changeScene, resetChickenPosition } = context;

      if (currentScene === 'coop') {
        scene = <Coop />
      } else if (currentScene === 'maze') {
        scene = <Maze />
      };

      if (chickenPositionY == 0) {
        changeScene('maze')
        resetChickenPosition()
      }

      return(
        < View style={{
          position: 'absolute',
          }} >
          { scene }
        </View >
      )
    }}

    </GameContext.Consumer>
    
  )
}


export default SceneController