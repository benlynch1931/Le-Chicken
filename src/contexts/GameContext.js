import React, { createContext, Component } from 'react';

export const GameContext = createContext();

class GameContextProvider extends Component {
  state = {
    sceneSelector: 'coop',
    chickenGraphic: 'right',
    chickenPositionY: 450
  }

  changeScene = (sceneName) => {
    this.setState({ sceneSelector: sceneName })
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
    this.changeChickenGraphic('right')
  }

  render() {
    return (
      <GameContext.Provider value={{
        ...this.state,
        changeScene: this.changeScene,
        changeChickenGraphic: this.changeChickenGraphic,
        changeChickenPositionY: this.changeChickenPositionY,
        increaseChickenPositionY: this.increaseChickenPositionY,
        resetChickenPosition: this.resetChickenPosition
      }}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;