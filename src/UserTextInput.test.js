import React from 'react';
import UserTextInput from './UserTextInput.js';
import { GameContext } from './contexts/GameContext.js';
import { render, fireEvent } from '@testing-library/react-native'

const mockContext = {
    changeInputText: jest.fn(),
    inputText: "b",
    changeLevel: jest.fn(),
    level: 0,
    changeChickenMoving: jest.fn(),
    changeChickenDirection: jest.fn()
}

test("Changes input but not level when incorrect input is given", () => {
    const { getByTestId } = render(<GameContext.Provider value={mockContext}><UserTextInput /></GameContext.Provider>)
    const input = getByTestId('textInput')
    fireEvent.changeText(input, "Walk")
    expect(mockContext.changeInputText).toHaveBeenCalled();
    expect(mockContext.changeLevel).not.toBeCalled();
})

test('Changes level and input text when level 0 is passed', () => {
    const { getByTestId } = render(<GameContext.Provider value={mockContext}><UserTextInput /></GameContext.Provider>)
    const input = getByTestId('textInput')
    fireEvent.changeText(input, "Marcher")
    expect(mockContext.changeInputText).toHaveBeenCalled();
    expect(mockContext.changeLevel).toHaveBeenCalled();
})

test('Changes level and input text when level 1 is passed', () => {
    mockContext.level = 1
    const { getByTestId } = render(<GameContext.Provider value={mockContext}><UserTextInput /></GameContext.Provider>)
    const input = getByTestId('textInput')
    fireEvent.changeText(input, "Ouvrir")
    expect(mockContext.changeInputText).toHaveBeenCalled();
    expect(mockContext.changeLevel).toHaveBeenCalled();
})

test('Changes level and input text when level 2 is passed', () => {
    mockContext.level = 2
    const { getByTestId } = render(<GameContext.Provider value={mockContext}><UserTextInput /></GameContext.Provider>)
    const input = getByTestId('textInput')
    fireEvent.changeText(input, "Haut")
    expect(mockContext.changeInputText).toHaveBeenCalled();
    expect(mockContext.changeChickenMoving).toHaveBeenCalled();
    expect(mockContext.changeChickenDirection).toHaveBeenCalled();
})
