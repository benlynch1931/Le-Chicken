import React, { createContext, Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const BattleContext = createContext();

class BattleContextProvider extends Component {
  state = {
    inputText: "",
    result: "",
    battleReport: "",
    chickenTurn: true,
    chickenHealth: 100,
    opponentHealth: 50,
    battleChickenPosition: {
      x: wp("-5%"), 
      y: hp("43%")
    },
    opponentPosition: [wp("25%"), hp("20%")],
    chickenWidth: wp("30%"),
    chickenHeight: hp("15.16%")
  }

  changeChickenWidth = (width) => {
    this.setState({chickenWidth: width})
  }

  changeChickenHeight = (height) => {
    this.setState({chickenHeight: height})
  }

  changeChickenTurn = () => {
      this.setState({chickenTurn: !this.state.chickenTurn})
  }
  changeInputText = (inputText) => {
    this.setState({ inputText: inputText })
  }

  changeBattleReport = (report) => {
      this.setState({battleReport: report})
  }

  changeResult = (result) => {
    this.setState({ result: result })
  }

  changeBattleChickenPosition = (xChange, yChange) => {
    this.setState({ battleChickenPosition: {
      x: this.state.battleChickenPosition.x + xChange,
      y: this.state.battleChickenPosition.y + yChange 
    }
    })
  }
 
  changeOpponentPosition = (x, y) => {
    this.setState({ opponentPosition: [this.state.opponentPosition[0] + x, this.state.opponentPosition[1] + y] })
  }

  changeChickenHealth = (damage) => {
    this.setState({ chickenHealth: this.state.chickenHealth - damage })
  }

  changeOpponentHealth = (damage) => {
    this.setState({ opponentHealth: this.state.opponentHealth - damage })
  }

  render() {
    return (
      <BattleContext.Provider value={{
        ...this.state,
        changeResult: this.changeResult,
        changeBattleChickenPosition: this.changeBattleChickenPosition,
        changeOpponentPosition: this.changeOpponentPosition,
        changeInputText: this.changeInputText,
        changeChickenHealth: this.changeChickenHealth,
        changeOpponentHealth: this.changeOpponentHealth,
        changeBattleReport: this.changeBattleReport,
        changeChickenTurn: this.changeChickenTurn,
        changeChickenWidth: this.changeChickenWidth,
        changeChickenHeight: this.changeChickenHeight
      }}>
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleContextProvider;
