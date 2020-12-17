import React, { useEffect, useContext, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, TouchableOpacity, Text } from 'react-native';

import Coop from './scenes/Coop.js';
import Maze from './scenes/Maze.js';
import Battle from './scenes/battle/Battle.js';
import Confrontation from './scenes/Confrontation.js'
import { GameContext } from './contexts/GameContext.js';
import Chicken from './Chicken.js'
import Credits from './Credits.js'

const SceneController = (props) => {
  const { currentScene, addToDictionary, chickenPosition, changeScene, resetChickenPosition, changeChickenToMove, changeLevel, level } = useContext(GameContext)

  const [transitionOpacity, setTransitionOpacity] = useState(0)

  let scene;

  const sceneTransition = (newScene) => {
    let counter = 1
    let interval = setInterval(() => {
      if (counter < 10) {
        setTransitionOpacity(counter * 0.1)
        counter++
      } else if (counter == 10) {
        resetChickenPosition()
        changeScene(newScene)
        setTransitionOpacity(1 - ((counter - 10) * 0.1))
        counter++
      } else if (counter < 20) {
        setTransitionOpacity(1 - ((counter - 10) * 0.1))
        counter++
      } else {
        clearInterval(interval)
      }
    }, 100)
  }


  useEffect(() => {
    if (chickenPosition.y <= hp("15%") && level == 2 && currentScene == 'coop') {
      sceneTransition('maze')
    }
  }, [chickenPosition])

  useEffect(() => {
    if (chickenPosition.y <= hp("3%") && chickenPosition.x <= wp("45%") && currentScene == 'maze') {
      sceneTransition('confrontation')
      changeLevel(4)
    }
  }, [chickenPosition])

  useEffect(() => {
    if (chickenPosition.y <= hp("15%") && currentScene == 'confrontation' && level == 6) {
      changeScene('battle')
    }
  }, [chickenPosition])

  useEffect(() => {
    if (level === 7 && currentScene === 'battle') {
      sceneTransition('credits')
    }
  })

  if (currentScene === 'coop') {
    scene = <Coop />
  } else if (currentScene === 'maze') {
    scene = <Maze setView={props.setView} view={props.view} />
  } else if (currentScene === 'battle') {
    scene = <Battle />
  } else if (currentScene === 'confrontation') {
    scene = <Confrontation setView={props.setView} view={props.view} />
  } else if (currentScene == 'credits') {
    scene = <Credits/>
  }

  const isChickenAtNote = () => {
    return (chickenPosition.y <= hp('35%') && chickenPosition.x <= wp("20%") && chickenPosition.x >= wp("10%"))
  }

  const displayButton = () => {
    if (currentScene == 'maze' && level === 2) {
      return (
        <View style={{
          zIndex: 10,
          position: 'absolute',
          left: 40,
          top: hp("15%"),
          width: wp("30%"),
          border: "black",
          borderWidth: "3%",
          backgroundColor: '#f0f0d1',
          display: isChickenAtNote() ? 'block' : 'none'
        }}>
          <TouchableOpacity
            onPress={() => { props.setView('note'); addToDictionary({ french: 'Frapper', english: 'To hit' }) }}
            style={{
              alignSelf: 'center',
              marginTop: '1%',
              width: '90%',
              height: '100%',
              zIndex: 1
            }}
            nativeID="Note1Button"
          >
            <Text style={{ fontFamily: 'Pixel' }}>Press to pick up note!</Text>
          </TouchableOpacity>
        </View>
      )
    } else if (currentScene == 'confrontation') {
      if (level == 4) {
        return (
          <View style={{ position: 'absolute', zIndex: 10, alignSelf: "center", top: hp("21%"), height: hp('5%'), width: wp("70%"), border: "black", borderWidth: "3%", backgroundColor: '#f0f0d1', display: chickenPosition.y < hp('40%') && level == 4 ? 'block' : 'none' }}>
            <TouchableOpacity
              onPress={() => { changeScene("battle") }}
              style={{
                alignSelf: 'center',
                marginTop: '2%',
                paddingLeft: '1%',
                width: '100%',
                height: '100%'
              }}
            >
              <Text style={{ fontFamily: 'Pixel', fontSize: 12 }}>Wipe the smug grin from the chicken's beak</Text>
            </TouchableOpacity>
          </View>
        )
      }
      else if (level == 5) {
        return (
          <View style={{ position: 'absolute', zIndex: 10, alignSelf: "center", top: hp("21%"), height: hp('5%'), width: wp("70%"), border: "black", borderWidth: "3%", backgroundColor: '#f0f0d1', display: chickenPosition.y < hp('40%') && level == 5 ? 'block' : 'none' }}>
            <TouchableOpacity
              onPress={() => { props.setView('note'); addToDictionary({ french: 'Sauter', english: 'To jump' }) }}
              style={{
                alignSelf: 'center',
                marginTop: '2%',
                paddingLeft: '1%',
                width: '100%',
                height: '100%',
              }}
            >
              <Text style={{ fontFamily: 'Pixel', fontSize: 12 }}>Take note?</Text>
            </TouchableOpacity>
          </View>
        )
      }
    }
  }

  return (
    < View >
      <View style={{
        position: 'absolute',
        zIndex: 10,
        backgroundColor: `rgba(0, 0, 0, ${transitionOpacity})`,
        width: wp('100%'),
        height: hp('61.58%'),
      }} />
      { scene}
      { displayButton()}
      <Chicken />
    </View >
  )
}


export default SceneController
