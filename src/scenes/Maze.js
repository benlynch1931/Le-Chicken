import React from 'react';
import { Image, View } from 'react-native';
import { Svg, Line } from 'react-native-svg'

const Maze = () => {

  return (
    <View
      style={{
        top: 50,
        width: 375,
        height: 400,
        backgroundColor: 'rgb(0, 255, 0)'
      }}
      nativeID='maze'
    >
    <Svg height="400" width="375">
      {/* borders */}
        <Line x1="212.5" y1="392.5" x2="375"   y2="392.5" stroke="red" strokeWidth="15" />
        <Line x1="0"     y1="392.5" x2="162.5" y2="392.5" stroke="red" strokeWidth="15" />
        <Line x1="7.5"   y1="0"     x2="7.5"   y2="400" stroke="red" strokeWidth="15" />
        <Line x1="367.5" y1="0"     x2="367.5" y2="400" stroke="red" strokeWidth="15" />
        <Line x1="0"     y1="7.5"   x2="57"    y2="7.5" stroke="red" strokeWidth="15" />
        <Line x1="107"   y1="7.5"   x2="375"   y2="7.5" stroke="red" strokeWidth="15" />
      {/* inside right */}
        <Line x1="155" y1="335"   x2="155" y2="400" stroke="red" strokeWidth="15" />
        <Line x1="147.5" y1="327.5"   x2="302.5" y2="327.5" stroke="red" strokeWidth="15" />
        <Line x1="295" y1="320"   x2="295" y2="72.5" stroke="red" strokeWidth="15" />
        <Line x1="295" y1="80"   x2="215" y2="80" stroke="red" strokeWidth="15" />
        <Line x1="222.5" y1="80"   x2="222.5" y2="190" stroke="red" strokeWidth="15" />
      {/* inside left */}
        <Line x1="150" y1="0"   x2="150" y2="253" stroke="red" strokeWidth="15" />
        <Line x1="142.5" y1="260"   x2="230" y2="260" stroke="red" strokeWidth="15" />
    </Svg>

    </View>
  )
}

export default Maze
