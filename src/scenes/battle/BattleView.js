import React from 'react';
import { Image, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BattleView = () => {
  return (
    < View
      style={{
        width: wp("100%"),
        height: hp("61.58%"),
        backgroundColor: 'rgb(199, 252, 177)',
        zIndex: '1'
      }}
    //  source={require('../../assets/coop.png')}
    />
  )

}
export default BattleView;
