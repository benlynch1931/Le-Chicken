import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Hint = () => {
  const { level } = useContext(GameContext)
  const [currentHint, setCurrentHint] = useState("Pour marcher: Type ‘marcher’")
  const hints = {
    0: "Pour marcher: Type ‘marcher’",
    1: "Pour ouvrir: Type 'ouvrir'",
    2: "Check your dictionary for [HAUT], [DROITE], [BAS], [GAUCHE]"
  }

  useEffect(() => {
    setCurrentHint(hints[level])
  }, [level, currentHint])

  return (
    < View style={styles.container} >
      <Text style={styles.hintText}>Hint: {currentHint}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: wp('100%'),
  },
  hintText: {
    alignSelf: "center",
    padding: hp("0.8%"),
    fontSize: 10
  }
});
export default Hint;
