import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { GameContext } from './contexts/GameContext.js';

const Hint = () => {
  const { level } = useContext(GameContext)
  const [currentHint, setCurrentHint] = useState("Pour marcher: Type ‘marcher’")
  const hints = {
    0: "Hint: Pour marcher: Type ‘marcher’",
    1: "Hint: Pour ouvrir: Type 'ouvrir'",
    2: "Hint: Check your dictionary for [HAUT], [DROITE], [BAS], [GAUCHE]"
  }

  useEffect(() => {
    setCurrentHint(hints[level])
  }, [level, currentHint])

  return (
    < View style={styles.container} >
      <Text style={styles.hintText}>{currentHint}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: wp('100%'),
  },
  hintText: {
    fontFamily: 'Pixel',
    lineHeight: 18,
    fontSize: 10,
    alignSelf: "center",
    padding: hp("0.8%"),
    fontSize: 10
  }
});
export default Hint;
