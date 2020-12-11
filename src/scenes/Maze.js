import React from 'react';
import { Image, View } from 'react-native';
import { Svg, Line } from 'react-native-svg'

const Maze = () => {

  return (
    <View
      style={{
        top: 50,
        width: 450,
        height: 500,
        backgroundColor: 'rgb(174, 224, 153)'
      }}
      nativeID='maze'
    >
    {/* The walls for the maze */}
    <Svg height="400" width="375" style={{ position: "absolute", top: 15, left: 18.75}}>
      {/* borders */}
        <Line x1="212.5"   x2="375"   y1="392.5"  y2="392.5"  stroke="#38761D" strokeWidth="15" />
        <Line x1="0"       x2="162.5" y1="392.5"  y2="392.5"  stroke="#38761D" strokeWidth="15" />
        <Line x1="7.5"     x2="7.5"   y1="0"      y2="400"    stroke="#38761D" strokeWidth="15" />
        <Line x1="367.5"   x2="367.5" y1="0"      y2="400"    stroke="#38761D" strokeWidth="15" />
        <Line x1="0"       x2="65"    y1="7.5"    y2="7.5"    stroke="#38761D" strokeWidth="15" />
        <Line x1="115"     x2="375"   y1="7.5"    y2="7.5"    stroke="#38761D" strokeWidth="15" />
      {/* inside right */}
        <Line x1="155"     x2="155"   y1="335"    y2="400"    stroke="#38761D" strokeWidth="15" />
        <Line x1="147.5"   x2="310"   y1="327.5"  y2="327.5"  stroke="#38761D" strokeWidth="15" />
        <Line x1="302.5"   x2="302.5" y1="65"     y2="320"    stroke="#38761D" strokeWidth="15" />
        <Line x1="230"     x2="310"   y1="72.5"   y2="72.5"   stroke="#38761D" strokeWidth="15" />
        <Line x1="237.5"   x2="237.5" y1="65"     y2="190"    stroke="#38761D" strokeWidth="15" />
      {/* inside left */}
        <Line x1="172.5"   x2="172.5" y1="0"      y2="253"    stroke="#38761D" strokeWidth="15" />
        <Line x1="65"      x2="245"   y1="260"    y2="260"    stroke="#38761D" strokeWidth="15" />
        <Line x1="81.25"   x2="81.25" y1="252.5"  y2="335"    stroke="#38761D" strokeWidth="32.5" />
        <Line x1="0"       x2="65"    y1="195"    y2="195"    stroke="#38761D" strokeWidth="15" />
        <Line x1="115"     x2="180"   y1="227.5"  y2="227.5"  stroke="#38761D" strokeWidth="80" />
    </Svg>

    </View>
  )
}

export default Maze
