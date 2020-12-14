import React, { useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from './contexts/GameContext.js';

const Dictionary = (props) => {

  const { translations } = useContext(GameContext)
  console.log(translations)

  // const startNewGame = async () => {
  //   restartGame();
  //   await setGameStarted(true);
  //   props.setView('game');
  // }

  const continueGame = async () => {
    props.setView('game');
  }

  // const continueGameButton = () => {
  //   if (gameStarted) {
  //     return <Button
  //       onPress={() => continueGame()}
  //       title="Continue Game"
  //       color="#441584"
  //     />
  //   }
  // }

  if (props.view != 'dictionary') return null;

  // const titleText = useState("Bird's Nest");
  // const bodyText = useState("This is not really a bird nest.");

  const rendertranslations = () => {
    return translations.map((translation, index) => <View><Text key={index}>{translation.word.french} ~~~~ {translation.word.english}</Text></View>);
  }

  return (
    <View 
      nativeID='dictionary'
    >
       <View style={{
        height: hp("10%"),
        width: wp("100%")
      }} />
      <Button
        onPress={() => { continueGame(); }}
        title="Back"
        color="#841584"
      />
      <Text style={{ alignSelf: 'center' }}>
        ~* DICTIONARY *~
      </Text>
      { rendertranslations() }
    </View>
  );
};


export default Dictionary;