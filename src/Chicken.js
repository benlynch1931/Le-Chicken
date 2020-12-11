import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';

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
    <View>
      <Image
        style={{
          position: 'absolute',
          top: chickenTop,
          width: chickenWidth,
          height: chickenHeight,
          left: "50%",
          marginLeft: -25
        }}
        nativeID={`chicken-${chickenGraphic}`}
        source={graphics[chickenGraphic]}
      />
    </View >

  )
}

export default Chicken
