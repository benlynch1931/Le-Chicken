import React from 'react';
import { Image, View } from 'react-native';

const Chicken = ({chickenTop}) => {
    const chickenWidth = 50
    const chickenHeight = 50

    return(
        <View>
            <Image
        style={{
            position: 'absolute',
            top: chickenTop,
            width: chickenWidth,
            height: chickenHeight,
            right: -20,
            zIndex: '1'
        }}
        source={require('../assets/chicken-left.png')}
            />
        </View>
    )
}

export default Chicken