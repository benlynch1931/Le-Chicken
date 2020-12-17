import React from 'react';
import { create, act } from 'react-test-renderer';

import Hint from './Hint.js';
import { GameContext } from './contexts/GameContext.js';

const mockContext = {level: 0}

test('displays correct hint at level 0', () => {
    const hint = create(<GameContext.Provider value={mockContext}><Hint/></GameContext.Provider>)
    expect(hint).toMatchSnapshot();
})

test('displays correct hint at level 1', async () => {
    mockContext.level = 1
    await act(async () => {
        newHint = create(<GameContext.Provider value={mockContext}><Hint/></GameContext.Provider>)
    })
    expect(newHint).toMatchSnapshot();
})
