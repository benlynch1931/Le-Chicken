import React from 'react';
import { create, act } from 'react-test-renderer';
import Battle from './Battle.js';

const mockContext = {level: 4}

describe('Battle', () => {

  it('render correctly', () => {
    const battle = create(<Battle />)
    expect(battle).toMatchSnapshot();
  })
})
