import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Chicken = () => {
  const { chickenPosition, level, chickenGraphic, changeChickenGraphic, increaseChickenPosition, chickenDirection, changeChickenToMove, chickenToMove, walls } = useContext(GameContext)
  const chickenWidth = wp("13.33%")
  const chickenHeight = hp("6.16%")
  const stepSize = "0.5%"

  const handleChickenGraphic = (direction, state) => {
    changeChickenGraphic(`${state}${direction}`)
  }

  const _moveIncrement = (direction, distance) => {

    switch (direction) {
      case 'up':
        increaseChickenPosition(0, -hp(stepSize))
        break;
      case 'down':
        increaseChickenPosition(0, hp(stepSize))
        break;
      case 'right':
        increaseChickenPosition(wp(stepSize), 0)
        break;
      case 'left':
        increaseChickenPosition(-wp(stepSize), 0)
        break;
    }
  }

  const _finishMovement = (direction, chickenWalk) => {
    clearInterval(chickenWalk)
    handleChickenGraphic(direction, 'idle')
    changeChickenToMove(0);
  }

  const move = (direction, distance) => {
    const horizWalls = walls.filter(wall => wall.type == 'horizontal' && wall.key == 8)
    const vertiWalls = walls.filter(wall => wall.type == 'vertical')
    for (let i = 0; i < horizWalls.length; i++) {
      const wallPosition = hp(horizWalls[i].position) + hp('5.00%') + hp("1.85%")
      console.log(distance)
      console.log(chickenPosition[1])
      console.log(wallPosition)
      console.log(hp(stepSize))
      if (chickenPosition[1] - (distance * hp(stepSize)) <= wallPosition + hp(stepSize) && chickenPosition[1] >= wallPosition - hp(stepSize)) {
        distance = Math.max(Math.floor((chickenPosition[1] - wallPosition) / hp(stepSize)), 0)
      }
      console.log(distance)
    }
    handleChickenGraphic(direction, 'walk');
    let chickenWalk = setInterval(() => {
      if (distance <= 0) {
        _finishMovement(direction, chickenWalk);
        return;
      }
      _moveIncrement(direction);
      distance--;
    }, 30)
  }

  useEffect(() => {
    if (chickenToMove == 0) {
      return;
    }
    move(chickenDirection, chickenToMove);
  }, [level, chickenToMove, chickenDirection])


  const graphics = {
    idleleft: require('../assets/chicken-left.png'),
    idleright: require('../assets/chicken-right.png'),
    idleup: require('../assets/chicken-stand-back.png'),
    idledown: require('../assets/chicken-stand-front.png'),
    walkup: require('../assets/chicken-run-back.gif'),
    walkright: require('../assets/chicken-run-right.gif'),
    walkleft: require('../assets/chicken-run-left.gif'),
    walkdown: require('../assets/chicken-run-front.gif'),
  }


  return (
    < Image
      style={{
        position: 'absolute',
        top: chickenPosition[1],
        left: chickenPosition[0],
        width: chickenWidth,
        height: chickenHeight,
        zIndex: 4
      }}
      nativeID={`chicken-${chickenGraphic}`}
      source={graphics[chickenGraphic]}
    />
  );

}

export default Chicken
