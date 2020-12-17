import React, { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GameContext } from '../../contexts/GameContext.js'

const BattleView = () => {

  const { level } = useContext(GameContext)

  const background = () => {
    if (level == 4) {
      return <Image style={styles.background} source={require('../../../assets/battle-background.png')} />
    } else if (level == 6) {
      return <Image style={styles.background} source={require('../../../assets/battle-background-fence.png')} />
    }
  }

  return (
    < View
      style={{
        width: wp("100%"),
        height: hp("61.58%"),
        backgroundColor: 'rgb(199, 252, 177)',
        zIndex: '1'
      }}>
      {background()}
    </View>
  )
}
export default BattleView;

const styles = StyleSheet.create({
  background: {
    zIndex: 2,
    width: wp("100%"),
    height: hp("61.58%"),
    resizeMode: "stretch"
  }
})
