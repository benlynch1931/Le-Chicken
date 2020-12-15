import React from 'react';
import { create, act } from 'react-test-renderer';
import BattleChicken from './BattleChicken.js';
import { BattleContext } from '../../contexts/BattleContext.js';

const mockContext = {
    battleChickenPosition: [20, 0],
    changeBattleChickenPosition: jest.fn() 
}

test('chicken is not moved past wp("20%")', async () => {
    jest.useFakeTimers();
    await act(async () => {
      newBattleChicken = create(<BattleContext.Provider value={mockContext}><BattleChicken /></BattleContext.Provider>)
    });
    jest.advanceTimersByTime(3000);
    expect(mockContext.changeBattleChickenPosition).not.toHaveBeenCalled();
});

test('chicken position is changed on render', async () => {
    mockContext.battleChickenPosition = [0, 0]
    jest.useFakeTimers();
    await act(async () => {
      newBattleChicken = create(<BattleContext.Provider value={mockContext}><BattleChicken /></BattleContext.Provider>)
    });
    jest.advanceTimersByTime(3000);
    expect(mockContext.changeBattleChickenPosition).toHaveBeenCalled();
  });