import React from 'react';
import AttackCommands from './AttackCommands.js';
import { render, fireEvent } from '@testing-library/react-native'

const mockContext = {
    changeChickenDirection: jest.fn()
}

mockSetChickenHealth = jest.fn()
mockSetOpponentHealth = jest.fn()

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1);
})

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

test("Changes input but not level when incorrect input is given", () => {
    const { getByTestId } = render(<AttackCommands
        chickenHealth={100} 
        setChickenHealth={mockSetChickenHealth}
        opponentHealth={100}
        setOpponentHealth={mockSetOpponentHealth}/>)
    const input = getByTestId('textInput')
    fireEvent.changeText(input, "incorrect string")
    expect(mockSetOpponentHealth).not.toHaveBeenCalled();
})

test("Changes input but not level when incorrect input is given", () => {
    const { getByTestId } = render(<AttackCommands
        chickenHealth={100} 
        setChickenHealth={mockSetChickenHealth}
        opponentHealth={100}
        setOpponentHealth={mockSetOpponentHealth}/>)
    const input = getByTestId('textInput')
    fireEvent.changeText(input, "frapper")
    expect(mockSetOpponentHealth).toHaveBeenCalledWith(100 - 11);
})