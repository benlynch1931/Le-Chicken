import React, { useContext } from 'react';
import { Image, View, Button, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from './../contexts/GameContext.js';


const Confrontation = (props) => {

  const { changeScene, chickenPosition, level, addToDictionary } = useContext(GameContext)

  const chickenOpponent = () => {
    if (level == 4) {
      return (
        <Image
        source={require('../../assets/chicken-front-opponent.png')}
        style={{position: "absolute", width: wp("11.73%"), height:  hp("5.42%"), }}
        />
      )
    }
  }

  const noteButton = () => {
    if (level == 4) {
      return (
        <View style={{alignSelf: "center", top: hp("21%"), height: hp('5%'),width: wp("70%"), border: "black", borderWidth: "3%", backgroundColor: '#f0f0d1', display: chickenPosition.y < hp('40%') && level == 4 ? 'block' : 'none' }}>        
        <TouchableOpacity
          onPress={() => {changeScene("battle")}}
          style={{
            alignSelf: 'center',
            marginTop: '2%',
            paddingLeft: '1%',
            width: '100%',
            height: '100%'
          }}
          >
          <Text style={{fontFamily: 'Pixel', fontSize: 12}}>Wipe the smug grin from the chicken's beak</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else if (level == 5) {
      return (
        <View style={{alignSelf: "center", top: hp("21%"), height: hp('5%'),width: wp("70%"), border: "black", borderWidth: "3%", backgroundColor: '#f0f0d1', display: chickenPosition.y < hp('40%') && level == 5 ? 'block' : 'none' }}>        
        <TouchableOpacity
          onPress={() => {props.setView('note'); addToDictionary({french: 'Sauter', english: 'To jump'})}}
          style={{
            alignSelf: 'center',
            marginTop: '2%',
            paddingLeft: '1%',
            width: '100%',
            height: '100%'
          }}
          >
            <Text style={{fontFamily: 'Pixel', fontSize: 12}}>Take note?</Text>
          </TouchableOpacity>
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
