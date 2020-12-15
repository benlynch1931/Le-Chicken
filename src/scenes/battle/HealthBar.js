import React, { useContext } from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BattleContext } from '../../contexts/BattleContext.js'

const HealthBar = (props) => {
  const { chickenHealth, opponentHealth } = useContext(BattleContext)
  let position;
  position = (props.character == "Opponent") ? {left: wp("55%"), top: hp("8%")}  : {left: wp("17%"), top: hp("43%")} 
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
        position: 'relative',
        width: wp("30%"),
        height: hp("5%"),
        border: 'solid #000000',
        backgroundColor: 'rgb(199, 252, 177)',
        zIndex: '3',
        left: position.left,
        top: position.top
      }}>
          <View  testID='healthLevel' style={{
        width: `${health}%`,
        height: '100%',
        backgroundColor: `${lifeBarColor}`,
        zIndex: '2'
      }}>

          </View>
      
    </View>
  )

}
export default HealthBar;
