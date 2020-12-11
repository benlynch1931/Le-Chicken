import React, { useState, useContext, useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import { GameContext } from './contexts/GameContext.js';

const Chicken = () => {
  const { chickenPositionY, level, chickenGraphic, changeChickenGraphic, increaseChickenPositionY, chickenMoving, changeChickenMoving } = useContext(GameContext)
  const chickenWidth = 50
  const chickenHeight = 50

  const handleChickenGraphic = (direction, state) => {
    if (direction == 'up' && state == 'walk') {
       changeChickenGraphic('walkUp')
       return
    } else if (direction == 'up' && state == 'idle') {
       changeChickenGraphic('up')
       return
    }
  }

  const _moveIncrement = (direction) => {
    increaseChickenPositionY(-5)
  }

  const _finishMovement = (direction, chickenWalk) => {
    console.log("in finish movement")
    clearInterval(chickenWalk)
    handleChickenGraphic(direction, 'idle');
    changeChickenMoving()
  }

  const move = (direction, distance, context) => {
    console.log("moving")
    handleChickenGraphic(direction, 'walk');
    let chickenWalk = setInterval(() => {
      if (distance <= 0) {
        _finishMovement(direction, chickenWalk)
      }
      _moveIncrement('up');
      distance--;
    }, 30)
  }

  useEffect(() => {
    if (level ==  1) {
      console.log("inside useffect")
      changeChickenMoving()
      move('up', 70)
    }
    if (level == 2) {
      move('up', 20)
    }
  }, [level])


  const graphics = {
    left: require('../assets/chicken-left.png'),
    right: require('../assets/chicken-right.png'),
    walkUp: require('../assets/chicken-run-back.gif'),
    up: require('../assets/chicken-stand-back.png')
  }


  return (
    <View>
      < Image
        style={{
          position: 'absolute',
          top: chickenPositionY,
          width: chickenWidth,
          height: chickenHeight,
          right: -20,
        }}
        // nativeID='chicken'
        nativeID={`chicken-${chickenGraphic}`}
        source={graphics[chickenGraphic]}
      />
    </View>
  );
    
}

export default Chicken