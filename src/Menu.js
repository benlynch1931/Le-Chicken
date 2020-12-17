import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from './contexts/GameContext.js';
import { BattleContext } from './contexts/BattleContext.js';
import { useFonts } from 'expo-font';

const Menu = (props) => {

  const { restartGame } = useContext(GameContext)
  const { resetBattleContext } = useContext(BattleContext)

  const [gameStarted, setGameStarted] = useState(false)
  if (props.view != 'menu') { return null }
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
      return (
        <TouchableOpacity
          // style={styles.menuButton}
          onPress={() => continueGame()}
        >
          <Text style={{ fontFamily: 'Pixel', alignSelf: 'center', marginTop: 30 }}>Continue Game</Text>
        </TouchableOpacity>
      )
    }
  }

  if (props.view != 'menu') return null;
  return (
    <View
      nativeID='menu'
    >
      <View style={{
        height: hp("20%"),
        width: wp("100%")
      }} />
      <TouchableOpacity
        onPress={() => startNewGame()}
      >
        <Text style={{ fontFamily: 'Pixel', fontSize: 30, alignSelf: 'center' }}>Le Chicken:</Text>
        <Text style={{ fontFamily: 'Pixel', fontSize: 30, alignSelf: 'center' }}>The Poulet</Text>

        <Text style={{ fontFamily: 'Pixel', alignSelf: 'center', marginTop: 30 }}>New Game</Text>
      </TouchableOpacity>
      { continueGameButton()}
    </View>
  );
};

export default Menu;