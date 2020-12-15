import React, { useContext, Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, Button, StyleSheet, Keyboard } from 'react-native';
import { GameContext } from './contexts/GameContext.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class DPad extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    this.direction = null;
    this.timer = null;
    this.addOne = this.addOne.bind(this);
    this.stopTimer = this.stopTimer.bind(this);  
  }

  addOne() {
    const { changeChickenToMove, changeChickenDirection } = useContext(GameContext)

    this.setState({number: this.state.number+1});
    changeChickenDirection(this.direction);
    changeChickenToMove(this.state.number);
    this.timer = setTimeout(this.addOne, 200);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  // var myVar = setInterval(myTimer, 1000);
  // let direction = null

  // const myTimer = () => {
  //   changeChickenDirection(direction)
  //   changeChickenToMove(1)
  // }

  // const myStopFunction= () => {
  //   clearInterval(myVar);
  // }

  render() {
    return (
      < View style={styles.container} >
        {/* <TextInput style={styles.input}
          placeholderTextColor="black"
          testID="textInput"
          onChangeText={checkInput}
          value={inputText} */}
        {/* /> */}
        {/* <Button
            onPressIn={debugMe()}
            onPressOut={debugMe()}
            title="HAUT"
            color="#841584"
          /> */}
        <TouchableOpacity onPressIn={ this.direction = 'up', this.addOne  } onPressOut={ this.stopTimer }>
          <Text>HAUT</Text>
        </TouchableOpacity>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: wp('100%'),
  }
  // input: {
  //   width: wp("40%"),
  //   fontSize: 20,
  //   borderWidth: 2,
  //   borderColor: 'grey',
  //   padding: 10,
  //   borderRadius: 5,
  //   textAlign: "center",
  //   alignSelf: "center"
  // }
});
export default DPad;