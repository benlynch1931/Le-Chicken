import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const BattleOpponent = () => {
  const [opponentPosition, setOpponentPosition] = useState(90)
  const chickenWidth = wp("13.33%")
  const chickenHeight = hp("6.16%")
  let entrance;

  useEffect(() => {
    if(opponentPosition > 60) {
        entrance = setInterval(() => {
            setOpponentPosition(opponentPosition => opponentPosition - 2)
        }, 80)
        return () => {
            clearInterval(entrance)
        }
    }
  }, [opponentPosition])

  return (
    < Image
      style={{
        position: 'absolute',
        top: hp("20%"),
        left: wp(opponentPosition),
        width: chickenWidth,
        height: chickenHeight,
        zIndex: 4
      }}
      nativeID={`battleOpponent`}
      source={require('../assets/chicken-left.png')}
    />
  );
}

export default BattleOpponent
