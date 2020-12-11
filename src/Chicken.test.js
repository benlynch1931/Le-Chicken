import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Chicken from './Chicken.js';
import { GameContext } from './contexts/GameContext.js';

const mockContext = { 
    chickenPositionY: 0,
    level: 0,
    chickenGraphic: "walkUp",
    changeChickenGraphic: jest.fn(),
    increaseChickenPositionY: jest.fn(),
    chickenMoving: false,
    changeChickenMoving: jest.fn()
}

test('renders correctly when the level is 0', () => {
    const chicken = renderer.create(<GameContext.Provider value={mockContext}><Chicken /></GameContext.Provider>).toJSON();
    expect(mockContext.increaseChickenPositionY).not.toBeCalled();
    expect(mockContext.changeChickenGraphic).not.toBeCalled();
    expect(chicken).toMatchSnapshot();
  });

test('renders correctly when the level is 1', async () => {
  mockContext.level = 1
  jest.useFakeTimers();
  const chicken = await act(async () => {
   return renderer.create(<GameContext.Provider value={mockContext}><Chicken /></GameContext.Provider>).toJSON();
  });
  expect(mockContext.changeChickenGraphic).toHaveBeenCalled();
  jest.advanceTimersByTime(3000);
  expect(mockContext.increaseChickenPositionY).toHaveBeenCalled();
  expect(chicken).toMatchSnapshot();
});
