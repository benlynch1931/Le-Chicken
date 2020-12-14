import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from '../contexts/GameContext.js';

const Maze = () => {
  const { walls } = useContext(GameContext)
  const horizWalls = walls.filter(wall => wall.type == 'horizontal')
  const vertiWalls = walls.filter(wall => wall.type == 'vertical')

  return (
    <View
      style={{
        width: wp("100%"),
        height: hp("61.58%"),
        backgroundColor: 'rgb(174, 224, 153)'
      }}
      nativeID='maze'
    >
      {/* The walls for the maze */}
      <Svg height={hp("49.26%")} width={wp('100%')} style={{ position: "absolute", top: hp("1.85%") }}>
        {
          horizWalls.map((wall) => (
            <Line x1={wp(`${wall.start}%`)} x2={wp(`${wall.end}%`)} y1={hp(`${wall.position}%`)} y2={hp(`${wall.position}%`)} stroke="#38761D" strokeWidth={hp(`${wall.stroke}%`)} />
          ))
        }

        {
          vertiWalls.map((wall) => (
            <Line x1={wp(`${wall.position}%`)} x2={wp(`${wall.position}%`)} y1={hp(`${wall.start}%`)} y2={hp(`${wall.end}%`)} stroke="#38761D" strokeWidth={wp(`${wall.stroke}%`)} />
          ))
        }
      </Svg>

    </View>
  )
}

export default Maze
