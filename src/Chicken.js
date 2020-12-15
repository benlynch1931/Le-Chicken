import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Chicken = () => {
  const { chickenPosition, loop, level, chickenGraphic, changeChickenGraphic, increaseChickenPosition, chickenDirection, changeChickenToMove, chickenToMove, walls, currentScene, needToUpdateChickenGraphic, changeNeedToUpdateChickenGraphic } = useContext(GameContext)
  const chickenWidth = wp("11.73%")
  const chickenHeight = hp("5.42%")
  const stepSize = "0.2%"



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
    if(loop == false) {
      changeNeedToUpdateChickenGraphic(true);
    }
    //handleChickenGraphic(direction, 'idle')
    changeChickenToMove(0);
  }

  const move = (direction, distance) => {
    if (currentScene == 'maze') {
      const horizWalls = walls.filter(wall => wall.type == 'horizontal')
      const vertiWalls = walls.filter(wall => wall.type == 'vertical')
      if (direction == 'up' || direction == 'down') {
        for (let i = 0; i < horizWalls.length; i++) {
          console.log(direction)
          const wallPosition = adjustYCoords(horizWalls[i].position, linePadding(horizWalls[i].stroke, direction))
          if (chickenWillReach(wallPosition, distance, direction) && chickenInLineWith(horizWalls[i])) {
            distance = Math.max(Math.floor((Math.abs(chickenEdge(direction) - wallPosition)) / hp(stepSize)), 0)
          }
        }
      } else {
        for (let i = 0; i < vertiWalls.length; i++) {
          const wallPosition = adjustXCoords(vertiWalls[i].position, linePadding(vertiWalls[i].stroke, direction))
          if (chickenWillReach(wallPosition, distance, direction) && chickenInLineWith(vertiWalls[i])) {
            distance = Math.max(Math.floor((Math.abs(wallPosition - chickenEdge(direction))) / wp(stepSize)), 0)
          }
        }
      }
    }
    //handleChickenGraphic(direction, 'walk');
    let chickenWalk = setInterval(() => {
      if (distance <= 0) {
        _finishMovement(direction, chickenWalk);
        return;
      }
      _moveIncrement(direction);
      distance--;
    }, 30)
  }

  const linePadding = (stroke, direction) => {
    switch (direction) {
      case 'up':
        return (stroke / 2)
      case 'down':
        return -stroke / 2
      case 'right':
        return -stroke / 2
      case 'left':
        return stroke / 2
    }
  }

  const chickenWillReach = (wallPosition, distance, direction) => {
    let chickenStartsBeforeWall
    let chickenEndsBeyondWall
    switch (direction) {
      case 'up':
        chickenStartsBeforeWall = chickenEdge(direction) >= wallPosition - hp(stepSize)
        chickenEndsBeyondWall = chickenPositionAfterMovement(distance, direction) <= wallPosition + hp(stepSize)
        break;
      case 'down':
        chickenStartsBeforeWall = chickenEdge(direction) <= wallPosition + hp(stepSize)
        chickenEndsBeyondWall = chickenPositionAfterMovement(distance, direction) >= wallPosition - hp(stepSize)
        break;
      case 'right':
        chickenStartsBeforeWall = chickenEdge(direction) <= wallPosition + wp(stepSize)
        chickenEndsBeyondWall = chickenPositionAfterMovement(distance, direction) >= wallPosition - wp(stepSize)
        break;
      case 'left':
        chickenStartsBeforeWall = chickenEdge(direction) >= wallPosition - wp(stepSize)
        chickenEndsBeyondWall = chickenPositionAfterMovement(distance, direction) <= wallPosition + wp(stepSize)
        break;
    }
    return chickenStartsBeforeWall && chickenEndsBeyondWall
  }

  const chickenEdge = (direction) => {
    switch (direction) {
      case 'up':
        return chickenPosition[1]
      case 'down':
        return chickenPosition[1] + chickenHeight
      case 'right':
        return chickenPosition[0] + chickenWidth
      case 'left':
        return chickenPosition[0]
    }
  }

  const chickenPositionAfterMovement = (distance, direction) => {
    switch (direction) {
      case 'up':
        return chickenEdge(direction) - (distance * hp(stepSize))
      case 'down':
        return chickenEdge(direction) + (distance * hp(stepSize))
      case 'right':
        return chickenEdge(direction) + (distance * wp(stepSize))
      case 'left':
        return chickenEdge(direction) - (distance * wp(stepSize))
    }
  }

  const chickenInLineWith = (wall) => {
    switch (wall.type) {
      case 'horizontal':
        return chickenPosition[0] > wp(wall.start) && chickenPosition[0] < wp(wall.end)
      case 'vertical':
        // is the chicken more than the start, and less than the end of the line?
        return chickenPosition[1] > adjustYCoords(wall.start) && chickenPosition[1] < adjustYCoords(wall.end)
    }
  }

  const adjustXCoords = (coord, padding = 0) => {
    return wp(coord) + wp(padding)
  }

  const adjustYCoords = (position, padding = 0) => {
    return hp(position) + hp('5.00%') + hp("1.85%") + hp(padding)
  }

  useEffect(() => {
    if (chickenToMove == 0) {
      return;
    }
    move(chickenDirection, chickenToMove);
  }, [level, chickenToMove, chickenDirection])

  useEffect(() => {
    let action
    if (chickenToMove > 0) {
      action = 'walk'
    } else {
      action = 'idle'
    }
    if (needToUpdateChickenGraphic == true) {
      changeChickenGraphic(`${action}${chickenDirection}`)
      changeNeedToUpdateChickenGraphic(false)
    }
  }, [chickenToMove, chickenDirection])


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
        zIndex: 4,
      }}
      nativeID={`chicken-${chickenGraphic}`}
      source={graphics[chickenGraphic]}
    />
  );

}

export default Chicken
