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

test('Changes level and input text when correct input is given', () => {
    const { getByTestId } = render(<GameContext.Provider value={mockContext}><UserTextInput /></GameContext.Provider>)
    const input = getByTestId('textInput')
    fireEvent.changeText(input, "Marcher")
    expect(mockContext.changeInputText).toHaveBeenCalled();
    expect(mockContext.changeLevel).toHaveBeenCalled();
})

