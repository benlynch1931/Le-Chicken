import React, { useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from './contexts/GameContext.js';

const NoteView = (props) => {

  const { currentScene, notes, level, changeLevel } = useContext(GameContext)

  const continueGame = async () => {
    props.setView('game');
  }

  if (props.view != 'note') return null;

  const note = () => {
    return <Text style={{fontFamily: 'Pixel', alignSelf: 'center', fontSize: 20, marginTop: 10}}> {notes[level]} </Text>
  }

  return (
    <View
      nativeID='note'
    >
      <View style={{
        height: hp("10%"),
        width: wp("100%")
      }} />
      <Text style={{ alignSelf: 'center', fontFamily: 'Pixel', marginBottom: 10 }}>
        ~* Note *~
      </Text>
      { note()}

      <TouchableOpacity
        onPress={() => { continueGame(); changeLevel(level + 1); }}
      >
        <Text style={{ alignSelf: 'center', fontFamily: 'Pixel', marginTop: 20, color: 'purple' }}>
          Add to Dictionary
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default NoteView;
