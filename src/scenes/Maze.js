import React, { useContext, useEffect } from 'react';
import { Image, View } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from '../contexts/GameContext.js';

const Maze = () => {
  const { walls } = useContext(GameContext)
  let maze_array = []

  useEffect(() => {
    console.log('Here!')
    for(const num in walls) {
      if(walls[num].type == 'horizontal') {
        let horizontalWall = <Line x1={wp(`${walls[num].start}%`)} x2={wp(`${walls[num].end}%`)} y1={hp(`${walls[num].position}%`)} y2={hp(`${walls[num].position}%`)} stroke="#38761D" strokeWidth={hp(`${walls[num].stroke}%`)} />
        maze_array.push(horizontalWall)
      }
      if(walls[num].type == 'vertical') {
        maze_array.push(<Line x1={wp(`${walls[num].position}%`)} x2={wp(`${walls[num].position}%`)} y1={hp(`${walls[num].start}%`)} y2={hp(`${walls[num].end}%`)} stroke="#38761D" strokeWidth={hp(`${walls[num].stroke}%`)} />)
      }
    }
  })

  const Test = ({maze_array}) => (
    <>
      {maze_array.map(wall => (
        wall
      ))}
    </>
  ); 


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
          Test()
        }
        {/* borders */}
        {/* <Line x1={wp(`${walls[0].start}%`)} x2={wp(`${walls[0].end}%`)} y1={hp(`${walls[0].position}%`)} y2={hp(`${walls[0].position}%`)} stroke="#38761D" strokeWidth={hp(`${walls[0].stroke}%`)} /> */}
        <Line x1={wp("0.00%")} x2={wp("43.33%")} y1={hp("48.34%")} y2={hp("48.34%")} stroke="#38761D" strokeWidth={hp("1.85%")} />
        {/* <Line x1={wp(`${walls[1].position}%`)} x2={wp(`${walls[1].position}%`)} y1={hp(`${walls[1].start}%`)} y2={hp(`${walls[1].end}%`)} stroke="#38761D" strokeWidth={wp(`${walls[1].stroke}%`)} /> */}
        <Line x1={wp("98.00%")} x2={wp("98.00%")} y1={hp("0.00%")} y2={hp("49.26%")} stroke="#38761D" strokeWidth={wp("4.00%")} />
        <Line x1={wp("0.00%")} x2={wp("17.33%")} y1={hp("0.92%")} y2={hp("0.92%")} stroke="#38761D" strokeWidth={hp("1.85%")} />
        <Line x1={wp("30.67%")} x2={wp("100.00%")} y1={hp("0.92%")} y2={hp("0.92%")} stroke="#38761D" strokeWidth={hp("1.85%")} />
        {/* inside right */}
        <Line x1={wp("41.33%")} x2={wp("41.33%")} y1={hp("41.26%")} y2={hp("49.26%")} stroke="#38761D" strokeWidth={wp("4.00%")} />
        <Line x1={wp("39.33%")} x2={wp("82.67%")} y1={hp("40.33%")} y2={hp("40.33%")} stroke="#38761D" strokeWidth={hp("1.85%")} />
        <Line x1={wp("80.67%")} x2={wp("80.67%")} y1={hp("8.00%")} y2={hp("39.41%")} stroke="#38761D" strokeWidth={wp("4.00%")} />
        <Line x1={wp("61.33%")} x2={wp("82.67%")} y1={hp("8.93%")} y2={hp("8.93%")} stroke="#38761D" strokeWidth={hp("1.85%")} />
        <Line x1={wp("63.33%")} x2={wp("63.33%")} y1={hp("8.00%")} y2={hp("23.40%")} stroke="#38761D" strokeWidth={wp("4.00%")} />
        {/* inside left */}
        <Line x1={wp("46.00%")} x2={wp("46.00%")} y1={hp("0.00%")} y2={hp("31.16%")} stroke="#38761D" strokeWidth={wp("4.00%")} />
        <Line x1={wp("17.33%")} x2={wp("65.33%")} y1={hp("32.02%")} y2={hp("32.02%")} stroke="#38761D" strokeWidth={hp("1.85%")} />
        <Line x1={wp("21.67%")} x2={wp("21.67%")} y1={hp("31.10%")} y2={hp("41.26%")} stroke="#38761D" strokeWidth={wp("8.67%")} />
        <Line x1={wp("0.00%")} x2={wp("17.33%")} y1={hp("24.01%")} y2={hp("24.01%")} stroke="#38761D" strokeWidth={hp("1.85%")} />
        <Line x1={wp("30.67%")} x2={wp("48.00%")} y1={hp("28.02%")} y2={hp("28.02%")} stroke="#38761D" strokeWidth={hp("9.85%")} />
      </Svg>

    </View>
  )
}

export default Maze
