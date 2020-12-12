import React from 'react';
import { Image, View } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Maze = () => {

  return (
    <View
      style={{
        //top: hp("6%"),
        width: wp("100%"),
        height: hp("61.58%"),
        backgroundColor: 'rgb(174, 224, 153)'
      }}
      nativeID='maze'
    >
      {/* The walls for the maze */}
      <Svg height={hp("49.26%")} width={wp('100%')} style={{ position: "absolute", top: hp("1.85%") }}>
        {/* borders */}
        <Line x1={wp("56.67%")} x2={wp("100.00%")} y1={hp("48.34%")} y2={hp("48.34%")} stroke="#38761D" strokeWidth={hp("1.85%")} />
        <Line x1={wp("0.00%")} x2={wp("43.33%")} y1={hp("48.34%")} y2={hp("48.34%")} stroke="#38761D" strokeWidth={hp("1.85%")} />
        <Line x1={wp("2.00%")} x2={wp("2.00%")} y1={hp("0.00%")} y2={hp("49.26%")} stroke="#38761D" strokeWidth={wp("4.00%")} />
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
