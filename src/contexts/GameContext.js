import React, { createContext, Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const GameContext = createContext();

const chickenPositionDefault = [wp("43.34%"), hp("60%")];
class GameContextProvider extends Component {
  state = {
    currentScene: 'coop',
    chickenGraphic: 'idleright',
    chickenPosition: chickenPositionDefault,
    inputText: "",
    hint: "Pour marcher: Type ‘marcher’",
    chickenToMove: 0,
    level: 0,
    chickenDirection: "up",
    walls: [{
      type: 'horizontal',
      position: 48.34,
      start: 56.67,
      end: 100.00,
      stroke: 1.85
    }, {
      type: 'vertical',
      position: 2.00,
      start: 0.00,
      end: 49.26,
      stroke: 4.00
    }]
  }



  changeLevel = (level) => {
    this.setState({ level: level })
  }
  changeChickenDirection = (direction) => {
    this.setState({ chickenDirection: direction })
  }
  changeInputText = (inputText) => {
    this.setState({ inputText: inputText })
  }
  changeScene = (sceneName) => {
    this.setState({ currentScene: sceneName })
  }
  changeChickenGraphic = (chickenGraphic) => {
    this.setState({ chickenGraphic: chickenGraphic })
  }
  increaseChickenPosition = (x, y) => {
    this.setState({ chickenPosition: [this.state.chickenPosition[0] + x, this.state.chickenPosition[1] + y] })
  }
  resetChickenPosition = () => {
    this.setState({ chickenPosition: chickenPositionDefault })
    this.changeChickenGraphic('up')
  }

  changeHint = (hint) => {
    this.setState({ hint: hint })
  }

  changeChickenToMove = (chickenToMove) => {
    this.setState({ chickenToMove: chickenToMove })
  }

  render() {
    return (
      <GameContext.Provider value={{
        ...this.state,
        changeScene: this.changeScene,
        changeChickenGraphic: this.changeChickenGraphic,
        increaseChickenPosition: this.increaseChickenPosition,
        resetChickenPosition: this.resetChickenPosition,
        changeInputText: this.changeInputText,
        changeHint: this.changeHint,
        changeChickenToMove: this.changeChickenToMove,
        changeChickenDirection: this.changeChickenDirection,
        changeLevel: this.changeLevel
      }}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
