import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const BattleChicken = () => {
  const [chickenPosition, setChickenPosition] = useState(0)
  const chickenWidth = wp("13.33%")
  const chickenHeight = hp("6.16%")
  let entrance;

  useEffect(() => {
    if(chickenPosition < 80) {
        entrance = setInterval(() => {
            setChickenPosition(chickenPosition => chickenPosition + 2)
        }, 30)

        return () => {
            clearInterval(entrance)
        }
    }
  }, [chickenPosition])

  return (
    < Image
      style={{
        position: `wp('${chickenPosition}%')`,
        top: hp("60%"),
        left: chickenPosition,
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

