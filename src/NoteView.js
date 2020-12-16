import React, { useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from './contexts/GameContext.js';

const NoteView = (props) => {

  const { currentScene, notes, level, changeLevel } = useContext(GameContext)

  const continueGame = async () => {
    props.setView('game');
  }

  if (props.view != 'note') return null;

  const note = () => {
    return <Text> {notes[level]} </Text>
  }

  return (
    <View
      nativeID='note'
    >
      <View style={{
        height: hp("10%"),
        width: wp("100%")
      }} />
      <Button
        onPress={() => { continueGame(); changeLevel(level + 1); }}
        title="Add to Dictionary"
        color="#841584"
      />
      <Text style={{ alignSelf: 'center' }}>
        ~* Note *~
      </Text>
      { note()}
    </View>
  );
};


export default NoteView;
