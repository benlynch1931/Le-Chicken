import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BattleContext } from '../../contexts/BattleContext.js'

const BattleOpponent = () => {
  const { opponentPosition, opponentHealth, changeOpponentPosition } = useContext(BattleContext)
  const opponentWidth = wp("13.33%")
  const opponentHeight = hp("6.16%")
  let entrance;
  let stepSize = "1%"

  useEffect(() => {
    if(opponentPosition[0] > wp("16%")) {
        entrance = setInterval(() => {
            changeOpponentPosition(-wp(stepSize), 0)
        }, 80)
        return () => {
            clearInterval(entrance)
        }
    }
  }, [opponentPosition])

  return (
    < Image
      style={{
        position: 'absolute',
        top: hp("20%"),
        left: wp(opponentPosition),
        width: opponentWidth,
        height: opponentHeight,
        zIndex: 4
      }}
      nativeID={`battleOpponent`}
      source={require('../../../assets/chicken-left.png')}
    />
  );
}

export default BattleOpponent
