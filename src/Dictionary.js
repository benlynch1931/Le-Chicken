import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { GameContext } from './contexts/GameContext.js';

const Dictionary = (props) => {

  const { translations, currentScene } = useContext(GameContext)
  const continueGame = async () => {
    props.setView('game');
  }

  if (props.view != 'dictionary') return null;

  const rendertranslations = () => {
    return translations.map((word, index) => <View key={index}><Text style={{ fontFamily: 'Pixel', alignSelf: 'center', marginTop: 10 }} >{word.french} ~~~~ {word.english}</Text></View>);
  }

  return (
    <View
      nativeID='dictionary'
    >
      <View style={{
        height: hp("10%"),
        width: wp("100%")
      }} />
      <Text style={{ alignSelf: 'center', fontFamily: 'Pixel', marginBottom: 10 }}>
        ~* DICTIONARY *~
      </Text>
      { rendertranslations()}
      <TouchableOpacity
        onPress={() => { continueGame(); }}
      >
        <Text style={{ alignSelf: 'center', fontFamily: 'Pixel', marginTop: 20, color: 'purple' }}>
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default Dictionary;
