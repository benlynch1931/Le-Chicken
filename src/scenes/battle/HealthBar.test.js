import React from 'react';
import { create, act } from 'react-test-renderer';
import { render } from '@testing-library/react-native'
import HealthBar from './HealthBar.js';
import { BattleContext } from '../../contexts/BattleContext.js'

const mockContext = {
    chickenHealth: 100,
    opponentHealth: 50
}

describe('HealthBar', () => {
    test('the width of the inner view is green and 100% wide', () => {
        const {getByTestId} = render(<BattleContext.Provider value={mockContext}><HealthBar/></BattleContext.Provider>)
        const foundHealthLevelElement = getByTestId('healthLevel')
        expect(foundHealthLevelElement.props.style.backgroundColor).toEqual('rgb(97, 232, 39)')
        expect(foundHealthLevelElement.props.style.width).toEqual('100%')
    })
    test('the width of the inner view decreases in proportion to the health variable', () => {
        mockContext.chickenHealth = 90
        const {getByTestId} = render(<BattleContext.Provider value={mockContext}><HealthBar/></BattleContext.Provider>)
        const foundHealthLevelElement = getByTestId('healthLevel')
        expect(foundHealthLevelElement.props.style.width).toEqual('90%')
    })
    test('the color of the inner view changes to red when health is less than 25%', () => {
        mockContext.chickenHealth = 10
        const {getByTestId} = render(<BattleContext.Provider value={mockContext}><HealthBar/></BattleContext.Provider>)
        const foundHealthLevelElement = getByTestId('healthLevel')
        expect(foundHealthLevelElement.props.style.backgroundColor).toEqual('rgb(227, 16, 16)')
    })
})
