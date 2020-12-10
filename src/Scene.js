import React from 'react';
import { Image, View } from 'react-native';
import Coop from './scenes/Coop.js';
import Maze from './scenes/Maze.js';

const Scene = () => {
  let sceneSelector = 'coop';
  let scene;

  if (sceneSelector === 'coop') {
    scene = <Coop />
  } else if (sceneSelector === 'maze') {
    scene = <Maze />
  }
  return (
    < View >
      { scene}
    </View >
  )
}

export default Scene;