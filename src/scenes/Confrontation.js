import React, { useContext } from 'react';
import { Image, View, Button, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from './../contexts/GameContext.js';


const Confrontation = (props) => {

  const { changeScene, chickenPosition, level } = useContext(GameContext)

  const chickenOpponent = () => {
    if (level == 4) {
      return (
        <Image
        source={require('../../assets/chicken-stand-front.png')}
        style={{position: "absolute", width: wp("11.73%"), height:  hp("5.42%"), }}
        />
      )
    }
  }

  const noteButton = () => {
    if (level == 4) {
      return (
        <View style={{alignSelf: "center", top: hp("21%"), width: wp("70%"), border: "solid #e3e3e3", borderRadius: 12, backgroundColor: "purple", display: chickenPosition.y < hp('40%') && level == 4 ? 'block' : 'none' }}>
        <Button color="white" title="Wipe the smug grin from the chicken's beak" onPress={() => {changeScene("battle")}}/>
        </View>
      )
    }
    else if (level == 5) {
      return (
        <View style={{alignSelf: "center", top: hp("21%"), width: wp("70%"), border: "solid #e3e3e3", borderRadius: 12, backgroundColor: "purple", display: chickenPosition.y < hp('40%') ? 'block' : 'none' }}>
        <Button color="white" title="Take note?" onPress={() => {props.setView('note')}}/>
        </View>
      )
    }
  }

  const note = () => {
    if(level == 4 || level == 5) {
      return (
        < Image
        source={require('../../assets/note.png')}
        style={{width: wp("12%"), height: wp("12%")}}
        />
      )
    }
  }

  return (
    <View style={{
      width: wp("100%"),
      height: hp("61.58%"),
      backgroundColor: 'rgb(200, 224, 200)'
  }}>
    <Image
      style={{
        position: 'absolute',
        width: wp("100%"),
        // top: hp("2.5%"),
        height: hp("61.58%"),
        resizeMode: "stretch"
      }}
      source={require('../../assets/styling/yard-styling.png')}
    />
      <View style={{position: "absolute", width: wp("16%"), top: hp("28%"), left: wp("50%"), marginLeft: -wp("8%")}}>
        { note() }
        {chickenOpponent()}
      </View>
      {noteButton()}
    </View>
  );
}

export default Confrontation;
