import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SoundController from './SoundController.js'

const Menu = (props) => {

  return (
    <View
      nativeID='menu'
    >
      <Text>Menu</Text>
      <Button
        onPress={() => props.setView('game')}
        title="New Game"
        color="#841584"
        nativeID='newGame'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Menu;