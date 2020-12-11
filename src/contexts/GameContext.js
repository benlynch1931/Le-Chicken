import React, { createContext, Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const GameContext = createContext();

class GameContextProvider extends Component {
  state = {
    currentScene: 'coop',
    chickenGraphic: 'right',
    chickenPositionY: hp("60%"),
    inputText: "",
    hint: "Pour marcher: Type ‘marcher’",
    chickenMoving: false,
    level: 0,
    chickenDirection: ""
  }

  changeLevel = (level) => {
    this.setState({ level: level })
  }
  changeChickenDirection = (direction) => {
    this.setState({chickenDirection: direction})
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
  changeChickenPositionY = (chickenPositionY) => {
    this.setState({ chickenPositionY: chickenPositionY })
  }
  increaseChickenPositionY = (increase) => {
    this.setState({ chickenPositionY: this.state.chickenPositionY + increase })
  }
  resetChickenPosition = () => {
    this.changeChickenPositionY(hp('60%'))
    this.changeChickenGraphic('up')
  }

  changeHint = (hint) => {
    this.setState({ hint: hint })
  }

  changeChickenMoving = () => {
    this.setState({chickenMoving: !this.state.chickenMoving})
  }

  render() {
    return (
      <GameContext.Provider value={{
        ...this.state,
        changeScene: this.changeScene,
        changeChickenGraphic: this.changeChickenGraphic,
        changeChickenPositionY: this.changeChickenPositionY,
        increaseChickenPositionY: this.increaseChickenPositionY,
        resetChickenPosition: this.resetChickenPosition,
        changeInputText: this.changeInputText,
        changeHint: this.changeHint,
        changeChickenMoving: this.changeChickenMoving,
        changeChickenDirection: this.changeChickenDirection,
        changeLevel: this.changeLevel
      }}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
