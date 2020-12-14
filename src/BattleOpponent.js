import React from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const BattleOpponent = () => {
  const chickenWidth = wp("13.33%")
  const chickenHeight = hp("6.16%")

  return (
    < Image
      style={{
        position: 'absolute',
        top: 100,
        left: 300,
        width: chickenWidth,
        height: chickenHeight,
        zIndex: 4
      }}
      nativeID={`battleChicken`}
      source={require('../assets/chicken-left.png')}
    />
  );
}

export default BattleOpponent
