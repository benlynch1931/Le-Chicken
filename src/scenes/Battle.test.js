import React from 'react';
import TestRenderer, { create, act } from 'react-test-renderer';
import Battle from './Battle.js';

const mockContext = {level: 4}

describe('Battle', () => {

  it('renders correctly', () => {
    const battle = create(<Battle />)
    expect(battle).toMatchSnapshot();
  })

  it('has a background colour of pale green', () => {
    const battle = TestRenderer.create(<Battle />)
    const battleRender = battle.root;
    expect(battleRender.findByProps({style}).props).toBe('')
  })
})
