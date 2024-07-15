import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import NavigationBar from './components/NavigationBar';
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
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/browse' element={<BrowseCharacters onCharacterSelect={this.handleCharacterSelection}/>}/>
          <Route path='/details' element={<CharacterDetails />}/>
          <Route path='/details/:characterId' element={<CharacterDetails />}/>
          <Route path='/comics' element={<Comics />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    )
  }  
}

export default App
