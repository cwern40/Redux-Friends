import React from 'react';
import './App.css';
import Friendslist from './Components/Friendlist'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        Hello
        <Friendslist />
      </div>
    );
  }
}

export default App;
