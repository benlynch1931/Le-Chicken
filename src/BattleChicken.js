import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const BattleChicken = () => {
  const [chickenPosition, setChickenPosition] = useState(-10)
  const chickenWidth = wp("13.33%")
  const chickenHeight = hp("6.16%")
  let entrance;

  useEffect(() => {
    if(chickenPosition < 20) {
        entrance = setInterval(() => {
            setChickenPosition(chickenPosition => chickenPosition + 2)
        }, 80)
        return () => {
            clearInterval(entrance)
        }
    }
  }, [chickenPosition])

  return (
    < Image
      style={{
        position: 'absolute',
        top: hp("60%"),
        left: wp(chickenPosition),
        width: chickenWidth,
        height: chickenHeight,
        zIndex: 4
      }}
      nativeID={`battleChicken`}
      source={require('../assets/chicken-right.png')}
    />
  );
}

export default BattleChicken

