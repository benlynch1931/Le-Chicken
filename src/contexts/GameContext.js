import React, { createContext, Component } from 'react';

export const GameContext = createContext();

class GameContextProvider extends Component {
  state = {
    currentScene: 'coop',
    chickenGraphic: 'right',
    chickenPositionY: 450,
    inputText: "",
    hint: "Pour marcher: Type ‘marcher’",
    level: 0
  }

  changeLevel = (level) => {
    this.setState({ level: level })
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
    this.changeChickenPositionY(500)
    this.changeChickenGraphic('up')
  }

  changeHint = (hint) => {
    this.setState({ hint: hint })
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
        changeLevel: this.changeLevel
      }}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;