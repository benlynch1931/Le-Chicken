import React, { useContext, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from './contexts/GameContext.js';

const Credits = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const { restartGame } = useContext(GameContext)
  const startNewGame = async () => {
    restartGame();
    await setGameStarted(true);
    props.setView('game');
  }

  return (
    < View
      style={{
        width: wp("100%"),
        height: hp("100%"),
        resizeMode: "stretch",
        backgroundColor: 'black',
        zIndex: 11
      }}
    >
        <Text style={styles.title}>Le Chicken est ready pour</Text>
        <Text style={styles.title2}>sa prochaine adventure!</Text>
        <Text></Text>
        <Text style={styles.title}>Credits:</Text>
        <Text style={{marginTop: 20}}></Text>
        <Text style={styles.coloured}>~*~Team Excelsior~*~</Text>
        <Text style={{marginTop: 20}}></Text>
        <Text style={styles.credits}>KC Thomas</Text>
        <Text style={styles.subCredits}>AKA: K(F)C</Text>
        <Text style={styles.credits}>Charlie Galbraith</Text>
        <Text style={styles.subCredits}>AKA: (Ex)Charl(s)ie(r)</Text>
        <Text style={styles.credits}>Ben Lynch</Text>
        <Text style={styles.subCredits}>AKA: (Just Ben)</Text>
        <Text style={styles.credits}>Dan Holmes</Text>
        <Text style={styles.subCredits}>AKA: Dan(lock Holmes)</Text>
        <Text style={styles.credits}>Emily Sesto</Text>
        <Text style={styles.subCredits}>AKA: EA Sports</Text>
        <Text style={{marginTop: 20}}></Text>
        <Text style={styles.coloured}>See our README for the</Text>
        <Text style={styles.coloured}>list of attributions!</Text>
        <TouchableOpacity
          onPress={() => startNewGame()} style={{zIndex: 12}}
        >
        <Text style={{fontFamily: 'Pixel', backgroundColor: 'white', padding: 5, color: 'black', alignSelf: 'center', marginTop: 30, zIndex: 12}}>New Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 40,
        fontFamily: "Pixel", 
        color: 'white', 
        alignSelf: 'center'
    },
    title2: {
        marginTop: 10,
        fontFamily: "Pixel", 
        color: 'white', 
        alignSelf: 'center'
    },
    credits: {
        fontFamily: "Pixel", 
        color: 'white', 
        alignSelf: 'center',
        marginTop: 15
    },
    coloured: {
        fontFamily: "Pixel", 
        color: '#00ff94', 
        alignSelf: 'center',
        marginTop: 15
    },
    subCredits: {
        fontFamily: "Pixel", 
        fontSize: 10,
        color: 'white', 
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20
    }
  });

export default Credits;
