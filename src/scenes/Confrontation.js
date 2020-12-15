import React, { useContext } from 'react';
import { Image, View, Button, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from './../contexts/GameContext.js';


const Confrontation = () => {

  const { changeScene, chickenPosition } = useContext(GameContext)

  return (
    <View style={{
        width: wp("100%"),
        height: hp("61.58%"),
        backgroundColor: 'rgb(200, 224, 200)'
    }}>
      <View style={{position: "absolute", width: wp("16%"), top: hp("8%"), left: wp("50%"), marginLeft: -wp("8%")}}>
      < Image
        source={require('../../assets/note.png')}
        style={{width: wp("12%"), height: wp("12%")}}
        />
        <Image 
        source={require('../../assets/chicken-stand-front.png')}
        style={{position: "absolute", width: wp("11.73%"), height:  hp("5.42%"), }}
        />
      </View>
      <View style={{alignSelf: "center", top: hp("1%"), width: wp("70%"), border: "solid #e3e3e3", borderRadius: 12, backgroundColor: "purple", display: chickenPosition.y < hp('20%') ? 'block' : 'none' }}>
        <Button color="white" title="Wipe the smug grin from the chicken's beak" onPress={() => {changeScene("battle")}}/>
      </View>
    </View>
  );
}

export default Confrontation;