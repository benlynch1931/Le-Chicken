import React, { useContext } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Coop = () => {

  return (
    < Image
      style={{
        width: wp("100%"),
        height: hp("61.58%"),
        resizeMode: "stretch"
      }}
      source={require('../../assets/coop.png')}
    />
  );
}

export default Coop;
