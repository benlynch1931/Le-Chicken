import React, { useContext, useEffect } from 'react';
import { Image, View, Button } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from '../contexts/GameContext.js';

const Maze = (props) => {
  const { walls, level, notePosition, changeScene, chickenPosition } = useContext(GameContext)
  const horizWalls = walls.filter(wall => wall.type == 'horizontal')
  const vertiWalls = walls.filter(wall => wall.type == 'vertical')

  const isChickenAtNote = () => {
    return (chickenPosition[1] <= hp('35%') && chickenPosition[0] <= wp("18%") && chickenPosition[0] >= wp("10%"))
  }

  const renderNote = () => {
    if(level == '2') {
      return(
        <View>
        <Image style={{
          height: hp("3.15%"),
          width: wp("6.79%"),
          top: hp("28%"),
          left: wp("21%")
        }}
        source={require("../../assets/note.png")}
        />
        
        <View style={{
          left: 40, 
          top: hp("15%"), 
          width: wp("30%"), 
          border: "solid #e3e3e3", 
          borderRadius: 12, 
          backgroundColor: "purple", 
          display: isChickenAtNote() ? 'block' : 'none' }}>
        <Button color="black" title="Pick up note?" onPress={() => {changeScene('note')}}/>
        </View>
        </View>
        
      )
    }
  }

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
          horizWalls.map((wall, index) => (
            <Line key={`h${index}`} x1={wp(`${wall.start}%`)} x2={wp(`${wall.end}%`)} y1={hp(`${wall.position}%`)} y2={hp(`${wall.position}%`)} stroke="#38761D" strokeWidth={hp(`${wall.stroke}%`)} />
          ))
        }

        {
          vertiWalls.map((wall, index) => (
            <Line key={`v${index}`} x1={wp(`${wall.position}%`)} x2={wp(`${wall.position}%`)} y1={hp(`${wall.start}%`)} y2={hp(`${wall.end}%`)} stroke="#38761D" strokeWidth={wp(`${wall.stroke}%`)} />
          ))
        }
      </Svg>
      { renderNote() }

    </View>
  )
}

export default Maze
