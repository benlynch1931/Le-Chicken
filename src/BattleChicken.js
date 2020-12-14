import React from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const BattleChicken = () => {
  const chickenWidth = wp("13.33%")
  const chickenHeight = hp("6.16%")

  return (
    < Image
      style={{
        position: 'absolute',
        top: 300,
        left: 100,
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
