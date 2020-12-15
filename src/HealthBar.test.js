import React from 'react';
import { create, act } from 'react-test-renderer';
import { render } from '@testing-library/react-native'
import HealthBar from './HealthBar.js';

describe('HealthBar', () => {
    test('the width of the inner view is green and 100% wide', () => {
        const {getByTestId} = render(<HealthBar health={100}/>)
        const foundHealthLevelElement = getByTestId('healthLevel')
        expect(foundHealthLevelElement.props.style.backgroundColor).toEqual('rgb(97, 232, 39)')
        expect(foundHealthLevelElement.props.style.width).toEqual('100%')
    })
    test('the width of the inner view decreases in proportion to the health variable', () => {
        const {getByTestId} = render(<HealthBar health={90}/>)
        const foundHealthLevelElement = getByTestId('healthLevel')
        expect(foundHealthLevelElement.props.style.width).toEqual('90%')
    })
    test('the color of the inner view changes to red when health is less than 25%', () => {
        const {getByTestId} = render(<HealthBar health={15}/>)
        const foundHealthLevelElement = getByTestId('healthLevel')
        expect(foundHealthLevelElement.props.style.backgroundColor).toEqual('rgb(227, 16, 16)')
    })
})
