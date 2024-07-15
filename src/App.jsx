import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
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
      <div>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/browse' element={<BrowseCharacters onCharacterSelect={this.handleCharacterSelection}/>}/>
          <Route path='/details/:id' element={<CharacterDetails characterId={selectedID}/>}/>
          <Route path='/comics' element={<Comics />}/>
        </Routes>
      </div>
    )
  }  
}

export default App
