import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Chicken = () => {
  const { chickenPosition, dPadPressed, level, chickenGraphic, changeChickenGraphic, increaseChickenPosition, chickenDirection, changeChickenToMove, chickenToMove, walls, currentScene, needToUpdateChickenGraphic, changeNeedToUpdateChickenGraphic } = useContext(GameContext)
  const chickenWidth = wp("11.73%")
  const chickenHeight = hp("5.42%")
  const stepSizeVertical = hp("0.5%")
  const stepSizeHorizontal = wp("1.0%")

  const move = (direction, distance) => {
    if (currentScene == 'maze') {
      walls.forEach(wall => distance = capDistanceForWall(wall, distance, direction))
    }
    let interval = setInterval(() => {
      if (distance > 0) {
        moveIncrement(direction);
        distance--;
      } else {
        finishMovement(interval);
      }
    }, 30)
  }

  const moveIncrement = (direction) => {
    switch (direction) {
      case 'up':
        increaseChickenPosition(0, -stepSizeVertical)
        break;
      case 'down':
        increaseChickenPosition(0, stepSizeVertical)
        break;
      case 'right':
        increaseChickenPosition(stepSizeHorizontal, 0)
        break;
      case 'left':
        increaseChickenPosition(-stepSizeHorizontal, 0)
        break;
    }
  }

  const finishMovement = (interval) => {
    clearInterval(interval)
    changeChickenToMove(0);
    triggerGraphicChange()
  }


  const capDistanceForWall = (wall, distance, direction) => {
    const padding = linePadding(wall.stroke, direction)
    const wallPosition = adjustCoords(wall.position, direction, padding)
    if (chickenWillReach(wallPosition, distance, direction) && chickenInLineWith(wall)) {
      distance = Math.floor((Math.abs(chickenEdge(direction) - wallPosition)) / stepSize(direction))
    }
    return distance
   }

  const chickenWillReach = (wallPosition, distance, direction) => {
    let chickenStartsBeforeWall
    let chickenEndsBeyondWall
    if (direction == 'up' || direction == 'left') {
      chickenStartsBeforeWall = chickenEdge(direction) >= wallPosition - stepSize(direction)
      chickenEndsBeyondWall = chickenPositionAfterMovement(distance, direction) <= wallPosition + stepSize(direction)
    } else {
      chickenStartsBeforeWall = chickenEdge(direction) <= wallPosition + stepSize(direction)
      chickenEndsBeyondWall = chickenPositionAfterMovement(distance, direction) >= wallPosition - stepSize(direction)
    }
    return chickenStartsBeforeWall && chickenEndsBeyondWall
  }

  const chickenInLineWith = (wall) => {
    let beyondStart;
    let beforeEnd;
    if (wall.type == 'horizontal' && isVertical(chickenDirection)) {
      beyondStart = chickenPosition.x > adjustXCoords(wall.start)
      beforeEnd = chickenPosition.x < adjustXCoords(wall.end)
    } else if (wall.type == 'vertical' && !isVertical(chickenDirection)) {
      beyondStart = chickenPosition.y > adjustYCoords(wall.start)
      beforeEnd = chickenPosition.y < adjustYCoords(wall.end)
    }
    return beyondStart && beforeEnd
  }

  const chickenPositionAfterMovement = (distance, direction) => {
    switch (direction) {
      case 'up':
        return chickenEdge(direction) - (distance * stepSizeVertical)
      case 'down':
        return chickenEdge(direction) + (distance * stepSizeVertical)
      case 'right':
        return chickenEdge(direction) + (distance * stepSizeHorizontal)
      case 'left':
        return chickenEdge(direction) - (distance * stepSizeHorizontal)
    }
  }

  const chickenEdge = (direction) => {
    switch (direction) {
      case 'up':
        return chickenPosition.y
      case 'down':
        return chickenPosition.y + chickenHeight
      case 'right':
        return chickenPosition.x + chickenWidth
      case 'left':
        return chickenPosition.x
    }
  }

  const linePadding = (stroke, direction) => {
    let padding = stroke / 2
    if (direction == 'up' || direction == 'left') {
      return padding
    } else {
      return -padding
    }
  }

  const adjustCoords = (coord, direction, padding = 0) => {
    if (isVertical(direction)) {
      return adjustYCoords(coord, padding)
    } else {
      return adjustXCoords(coord, padding)
    }
  }

  const adjustXCoords = (coord, padding = 0) => {
    return wp(coord) + wp(padding)
  }

  const adjustYCoords = (coord, padding = 0) => {
    return hp(coord) + hp('5.00%') + hp("1.85%") + hp(padding)
  }

  const stepSize = (direction) => {
    if (isVertical(direction)) {
      return stepSizeVertical
    } else {
      return stepSizeHorizontal
    }
  }

  const isVertical = (direction) => {
    return (direction == 'up' || direction == 'down')
  }

  const triggerGraphicChange = () => {
    if (!dPadPressed) {
      changeNeedToUpdateChickenGraphic(true);
    }
  }

  useEffect(() => {
    if (chickenToMove == 0) {
      return;
    }
    move(chickenDirection, chickenToMove);
  }, [level, chickenToMove, chickenDirection])

  useEffect(() => {
    let action = 'idle'
    if (chickenToMove > 0) {
      action = 'walk'
    }
    if (needToUpdateChickenGraphic == true) {
      changeChickenGraphic(`${action}${chickenDirection}`)
      changeNeedToUpdateChickenGraphic(false)
    }
  }, [chickenToMove, chickenDirection, needToUpdateChickenGraphic])


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

  if (currentScene == 'battle') {
    return null
  }
  return (
    < Image
      style={{
        position: 'absolute',
        top: chickenPosition.y,
        left: chickenPosition.x,
        width: chickenWidth,
        height: chickenHeight,
        zIndex: 5,
        resizeMode: "stretch"
      }}
      nativeID={`chicken-${chickenGraphic}`}
      source={graphics[chickenGraphic]}
    />
  );

}

export default Chicken
