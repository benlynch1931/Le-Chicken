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
    battleChickenPosition: [wp("-5%"), hp("60%")],
    opponentPosition: [wp("25%"), hp("20%")]
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

  changeBattleChickenPosition = (x, y) => {
    this.setState({ battleChickenPosition: [this.state.battleChickenPosition[0] + x, this.state.battleChickenPosition[1] + y] })
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
        changeChickenTurn: this.changeChickenTurn
      }}>
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleContextProvider;
