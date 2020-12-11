import React from 'react';
import { Image, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Coop = () => {

  return (
    <View
      style={{
        top: hp("6.16%"),
        width: wp("100%"),
        height: hp("61.58%"),
        backgroundColor: 'saddlebrown'
      }}>

    </View>
  )
}

export default Coop;
