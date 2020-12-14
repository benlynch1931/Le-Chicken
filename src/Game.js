import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Chicken from './Chicken.js'
import GameController from './GameController.js'
import SceneController from './SceneController.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Game = (props) => {
  if (props.view != 'game') return null;
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: 'white' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      nativeID='game'
    >
      <View style={{
        height: hp("5%"),
        alignItems: 'flex-start',
        width: wp("100%"),
        padding: hp("0.8%")
      }}>
        <Button
          onPress={() => props.setView('menu')}
          title="Menu"
          color="#841584"
        />
      </View>
      <SceneController />
      <Chicken />
      <GameController />
    </KeyboardAwareScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Game;