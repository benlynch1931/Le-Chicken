import React from 'react';
import { Image, View } from 'react-native';

const Chicken = () => {
    const chickenWidth = 50
    const chickenHeight = 60

    return(
        <View>
            <Image
        style={{
            position: 'absolute',
            top: 100,
            width: 50,
            height: 50,
            backgroundColor: 'white'
        }}
        source={require('../assets/chicken-left.png')}
            />
        </View>
    )
}

export default Chicken