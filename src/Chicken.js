import React, { useState, useContext, useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Chicken = () => {
  const { chickenPositionY, level, chickenGraphic, changeChickenGraphic, increaseChickenPositionY, chickenMoving, changeChickenMoving, direction } = useContext(GameContext)
  const chickenWidth = wp("13.33%")
  const chickenHeight = hp("6.16%")

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
    increaseChickenPositionY(-(hp("0.5%")))
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
      move('up', 90)
    }
    if (level == 2) {
      move('up', 27)
    }
    if (chickenMoving == true && direction === 'up') {
      move('up', 10)
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
          alignSelf: "center"
        }}
        nativeID={`chicken-${chickenGraphic}`}
        source={graphics[chickenGraphic]}
      />
    </View>
  );

}

export default Chicken
