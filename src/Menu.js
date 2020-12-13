import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Menu = (props) => {

  const musicButtonText = () => {
    if (props.musicPlaying) {
      return "Music: On"
    } else {
      return "Music: Off"
    }
  }

  return (
    <View
      nativeID='menu'
    >
      <Text>Menu</Text>
      <Button
        onPress={() => props.setScreen('game')}
        title="New Game"
        color="#841584"
        nativeID='newGame'
      />
      <Button title={musicButtonText()} onPress={props.toggleMusic} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Menu;