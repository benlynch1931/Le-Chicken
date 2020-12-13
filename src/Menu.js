import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Menu = (props) => {

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Menu;