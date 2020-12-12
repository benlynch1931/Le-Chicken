import React, { useContext } from 'react';
import { Text, TextInput, View, StyleSheet, Keyboard } from 'react-native';
import TestRenderer from 'react-test-renderer';
import UserTextInput from './UserTextInput.js';
import { GameContext } from './contexts/GameContext.js';
import { render, fireEvent } from '@testing-library/react-native'

// beforeEach(() => {
//     jest.spyOn(React, 'useContext').mockImplementation(() => ({
//         changeInputText: jest.fn(),
//         inputText: "",
//         changeLevel: jest.fn(),
//         level: 0,
//         changeChickenMoving: jest.fn(),
//         changeChickenDirection: jest.fn()
//     }))
// })

const mockContext = {
    changeInputText: jest.fn(),
    inputText: "b",
    changeLevel: (newLevel) => {mockContext.level = newLevel},
    level: 0,
    changeChickenMoving: jest.fn(),
    changeChickenDirection: jest.fn()
}

test('displays correct hint at level 0', () => {
    const userInput = TestRenderer.create(<GameContext.Provider value={mockContext}><UserTextInput/></GameContext.Provider>)
    const userInputInstance = userInput.root;
    console.log(userInputInstance.findByType(TextInput).props.value)
    userInputInstance.findByType(TextInput).props.value = "marcher"
    console.log(userInputInstance.findByType(TextInput).props.value)
    expect(mockContext.changeInputText).toBeCalled();
    expect(userInput).toMatchSnapshot();
})
