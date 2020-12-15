import React from 'react';
import AttackCommands from './AttackCommands.js';
import { render, fireEvent } from '@testing-library/react-native'
import Battle from './Battle.js';
import { BattleContext } from '../../contexts/BattleContext.js';

const mockContext = {
    chickenHealth: 100, 
    changeResult: jest.fn(),
    opponentHealth: 50,
    inputText: "",
    battleReport: "",
    changeBattleReport: jest.fn(),
    chickenTurn: true,
    result: "",
    displayResult: jest.fn(),
    changeChickenTurn: jest.fn(),
    changeOpponentHealth: jest.fn(),
    changeChickenHealth: jest.fn(),
    changeInputText: jest.fn()
}

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1);
})

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

test("Changes input but not level when incorrect input is given", () => {
    const { getByTestId } = render(<BattleContext.Provider value={mockContext}><AttackCommands/></BattleContext.Provider>)
    const input = getByTestId('textInput')
    fireEvent.changeText(input, "incorrect string")
    expect(mockContext.changeInputText).toHaveBeenCalled();
})

test("Changes input but not level when incorrect input is given", () => {
    const { getByTestId } = render(<BattleContext.Provider value={mockContext}><AttackCommands/></BattleContext.Provider>)
    const input = getByTestId('textInput')
    fireEvent.changeText(input, "frapper")
    console.log(input)
    expect(mockContext.changeInputText).toHaveBeenCalled();

})