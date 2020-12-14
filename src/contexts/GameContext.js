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
      stroke: 1.85
    }, {
      type: 'horizontal',
      position: 48.34,
      start: 0.00,
      end: 43.33,
      stroke: 1.85
    }, {
      type: 'vertical',
      position: 98.00,
      start: 0.00,
      end: 49.26,
      stroke: 1.85
    }, {
      type: 'horizontal',
      position: 0.92,
      start: 0.00,
      end: 17.33,
      stroke: 1.85
    }, {
      type: 'horizontal',
      position: 0.92,
      start: 30.67,
      end: 100.00,
      stroke: 1.85
    }, {
      type: 'vertical',
      position: 41.33,
      start: 41.26,
      end: 49.26,
      stroke: 1.85
    }, {
      type: 'horizontal',
      position: 40.33,
      start: 39.33,
      end: 82.67,
      stroke: 1.85
    }, {
      type: 'vertical',
      position: 80.67,
      start: 8.00,
      end: 39.41,
      stroke: 1.85
    }, {
      type: 'horizontal',
      position: 8.93,
      start: 61.33,
      end: 82.67,
      stroke: 1.85
    }, {
      type: 'vertical',
      position: 63.33,
      start: 8.00,
      end: 23.40,
      stroke: 1.85
    }, {
      type: 'vertical',
      position: 46,
      start: 0.00,
      end: 31.16,
      stroke: 1.85
    }, {
      type: 'horizontal',
      position: 32.02,
      start: 17.33,
      end: 65.33,
      stroke: 1.85
    }, {
      type: 'vertical',
      position: 21.67,
      start: 31.10,
      end: 41.26,
      stroke: 8.67
    }, {
      type: 'horizontal',
      position: 24.01,
      start: 0.00,
      end: 17.33,
      stroke: 1.85
    }, {
      type: 'horizontal',
      position: 28.02,
      start: 30.67,
      end: 48.00,
      stroke: 9.85
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
