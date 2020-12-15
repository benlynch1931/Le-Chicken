import React, { createContext, Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { walls } from '../Walls.js';

export const GameContext = createContext();

<<<<<<< HEAD
const chickenPositionDefault = [wp("43.34%"), hp("60%")];
const initialScene = 'confrontation';
=======
const chickenPositionDefault = {
  x: wp("43.34%"),
  y: hp("60%")
}
const initialScene = 'coop';
>>>>>>> main
const initialChickenGraphic = 'idleright';
const initialHint = "Pour marcher: Type ‘marcher’";
const initialLevel = 0;

class GameContextProvider extends Component {
  state = {
    currentScene: initialScene,
    chickenGraphic: initialChickenGraphic,
    chickenPosition: chickenPositionDefault,
    inputText: "",
    hint: initialHint,
    chickenToMove: 0,
    level: initialLevel,
    chickenDirection: "up",
    translations: [],
    walls: walls,
    needToUpdateChickenGraphic: false,
    dPadPressed: false
  }

  changeDPadPressed = (dPadPressed) => {
    this.setState({ dPadPressed: dPadPressed })
  }

  changeNeedToUpdateChickenGraphic = (needToUpdateChickenGraphic) => {
    this.setState({ needToUpdateChickenGraphic: needToUpdateChickenGraphic })
  }

  addToDictionary = (translation) => {
    this.setState(prevState => ({
      translations: [...prevState.translations, translation]
    }))
  }
  changeLevel = (level) => {
    this.setState({ level: level })
  }
<<<<<<< HEAD

=======
  changeGameMode = (mode) => {
    this.setState({ gameMode: mode })
  }
>>>>>>> main
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
  increaseChickenPosition = (xIncrease, yIncrease) => {
    this.setState({
      chickenPosition: {
        x: this.state.chickenPosition.x + xIncrease,
        y: this.state.chickenPosition.y + yIncrease
      }
    })
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

  restartGame = () => {
    this.resetChickenPosition();
    this.changeScene(initialScene);
    this.changeChickenGraphic(initialChickenGraphic);
    this.changeHint(initialHint);
    this.changeLevel(initialLevel);
    this.changeInputText("");
    this.changeChickenDirection('up')
    this.changeChickenToMove(0);
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
        changeLevel: this.changeLevel,
        restartGame: this.restartGame,
<<<<<<< HEAD
        addToDictionary: this.addToDictionary
=======
        changeGameMode: this.changeGameMode,
        addToDictionary: this.addToDictionary,
        changeNeedToUpdateChickenGraphic: this.changeNeedToUpdateChickenGraphic,
        changeDPadPressed: this.changeDPadPressed
>>>>>>> main
      }}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
