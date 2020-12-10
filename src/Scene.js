import React from 'react';
import { Image, View } from 'react-native';
import Coop from './scenes/Coop.js';
import Maze from './scenes/Maze.js';
import { GameContext } from './contexts/GameContext.js';

const Scene = (props) => {
  let scene;
  // const sceneSelector = props.sceneSelector
  return (
    <GameContext.Consumer>{(context) => {
      const { sceneSelector } = context;
      if (sceneSelector === 'coop') {
        scene = <Coop />
      } else if (sceneSelector === 'maze') {
        scene = <Maze />
      };
      return(
        < View style={{
          position: 'absolute',
          }} >
          { scene}
        </View >
      )
    }}

    </GameContext.Consumer>
    
  )
}

export default Scene;