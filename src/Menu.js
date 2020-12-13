import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Menu = (props) => {

  return (
    <View
      nativeID='menu'
    >
      <View style={{
        height: hp("20%"),
        width: wp("100%"),
      }} />
      <Button
        onPress={() => props.setView('game')}
        title="New Game"
        color="#841584"
        nativeID='newGame'
      />
    </View>
  );
};

export default Menu;