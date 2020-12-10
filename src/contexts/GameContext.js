import React, { createContext, Component } from 'react';

export const GameContext = createContext();

class GameContextProvider extends Component {
    state = { 
        sceneSelector: 'coop'
    }

    changeScene = (sceneName) => {
        this.setState({ sceneSelector: sceneName})
    }
    render() {
        return (
            <GameContext.Provider value={{...this.state, changeScene: this.changeScene}}>
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

export default GameContextProvider;