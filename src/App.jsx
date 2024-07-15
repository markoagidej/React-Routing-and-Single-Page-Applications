import './App.css'
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import { useState } from 'react';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedID: null
    };
  }

  handleCharacterSelection = (characterID) => {
    this.setState({selectedID: characterID})
  }

  render() {
    const { selectedID } = this.state

    return (
      <div className={"row"}>
        <div className={"column"}>
          <BrowseCharacters onCharacterSelect={this.handleCharacterSelection}/>
        </div>
        <div className={"column"}>
          {selectedID &&
            <CharacterDetails characterId={selectedID}/>
          }
        </div>
      </div>
    )
  }  
}

export default App
