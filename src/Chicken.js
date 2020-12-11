import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import { GameContext } from './contexts/GameContext.js';

const Chicken = ({ chickenGraphic, chickenTop }) => {
  const chickenWidth = 50
  const chickenHeight = 50

  const graphics = {
    left: require('../assets/chicken-left.png'),
    right: require('../assets/chicken-right.png'),
    walkUp: require('../assets/chicken-run-back.gif'),
    up: require('../assets/chicken-stand-back.png')
  }

  return (

    <GameContext.Consumer>{(context) => {
      const { chickenPositionY, chickenGraphic } = context;
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
      )
    }}
    </GameContext.Consumer>

  )
}

export default Chicken