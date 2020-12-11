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
    clearInterval(chickenWalk)
    handleChickenGraphic(direction, 'idle');
    changeChickenMoving()
  }

  const move = (direction, distance, context) => {
    handleChickenGraphic(direction, 'walk');
    let chickenWalk = setInterval(() => {
      distance--;
      if (distance <= 0) {
        _finishMovement(direction, chickenWalk)
      }
      _moveIncrement('up');
    }, 30)
  }

  useEffect(() => {
    if (level ==  1) {
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
    <View style={{zIndex: 4}}>
      < Image
        style={{
          position: 'absolute',
          top: chickenPositionY,
          width: chickenWidth,
          height: chickenHeight,
          left: "50%",
          marginLeft: -25
          
        }}
        nativeID={`chicken-${chickenGraphic}`}
        source={graphics[chickenGraphic]}
      />
    </View>
  );
    
}

export default Chicken
