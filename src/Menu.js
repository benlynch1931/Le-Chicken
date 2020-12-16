import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from './contexts/GameContext.js';
import { useFonts } from 'expo-font';

const Menu = (props) => {

  const { restartGame } = useContext(GameContext)

  const [gameStarted, setGameStarted] = useState(false)
  if(props.view != 'menu'){ return null}
  const startNewGame = async () => {
    restartGame();
    await setGameStarted(true);
    props.setView('game');
  }

  const continueGame = async () => {
    await setGameStarted(true);
    props.setView('game');
  }

  const continueGameButton = () => {
    if (gameStarted) {
      return <Button
        onPress={() => continueGame()}
        title="Continue Game"
        color="#441584"
      />
    }
  }

  if (props.view != 'menu') return null;
  return (
    <View
      nativeID='menu'
    >
      <View style={{
        height: hp("20%"),
        width: wp("100%"),
      }} />
      { continueGameButton()}
      <Button
        onPress={() => { startNewGame(); }}
        title="New Game"
        color="#841584"
      />
    </View>
  );
};

export default Menu;