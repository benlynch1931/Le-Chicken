import React from 'react';
import { create, act } from 'react-test-renderer';
import BattleOpponent from './BattleOpponent.js';
import { BattleContext } from '../../contexts/BattleContext.js';

const mockContext = {
    opponentPosition: [60, 0],
    changeOpponentPosition: jest.fn() 
}


test('opponent is not moved past wp("60%")', async () => {
    jest.useFakeTimers();
    await act(async () => {
      newOpponent = create(<BattleContext.Provider value={mockContext}><BattleOpponent /></BattleContext.Provider>)
    });
    jest.advanceTimersByTime(3000);
    expect(mockContext.changeOpponentPosition).not.toHaveBeenCalled();
});

test('opponent position is changed on render', async () => {
    mockContext.opponentPosition = [80, 0]
    jest.useFakeTimers();
    await act(async () => {
      newOpponent = create(<BattleContext.Provider value={mockContext}><BattleOpponent /></BattleContext.Provider>)
    });
    jest.advanceTimersByTime(3000);
    expect(mockContext.changeOpponentPosition).toHaveBeenCalled();
});

