import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'

import UserTextInput from './UserTextInput.js';
import { GameContext } from './contexts/GameContext.js';

const mockContext = {
    changeInputText: jest.fn(),
    inputText: "b",
    level: 0,
    changeLevel: jest.fn(),
    chickenToMove: 0,
    changeChickenToMove: jest.fn(),
    changeChickenDirection: jest.fn(),
    addToDictionary: jest.fn(),
    changeNeedToUpdateChickenGraphic: jest.fn()
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
    expect(mockContext.changeChickenToMove).toHaveBeenCalled();
    expect(mockContext.changeChickenDirection).toHaveBeenCalled();
})
