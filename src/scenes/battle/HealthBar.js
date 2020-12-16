import React, { useContext } from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BattleContext } from '../../contexts/BattleContext.js'

const HealthBar = (props) => {
  const { chickenHealth, opponentHealth } = useContext(BattleContext)
  let position;
  position = (props.character == "Opponent") ? {left: wp("55%"), top: hp("8%")}  : {left: wp("17%"), top: hp("35%")}
  let health = (props.character == "Opponent") ? opponentHealth : chickenHealth

  let lifeBarColor;
  if (health >= 25) {
      lifeBarColor = 'rgb(97, 232, 39)'
  } else {
    lifeBarColor = 'rgb(227, 16, 16)'
  }
  return (
    < View
      style={{
        position: 'absolute',
        width: wp("30%"),
        height: hp("3%"),
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
        zIndex: '6',
        left: position.left,
        top: position.top
      }}>
        <View  testID='healthLevel' style={{
          display: health <= 0 ? 'none' : 'block',
          width: `${health}%`,
          height: '100%',
          backgroundColor: `${lifeBarColor}`,
          zIndex: '5'
        }}>

        </View>

    </View>
  )

}
export default HealthBar;
