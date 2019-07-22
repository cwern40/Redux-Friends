import React from 'react';
import './App.css';
import Friendslist from './Components/Friendlist';
import Login from './Components/Login';
import { Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Friendslist} />
      </div>
    );
  }
}

export default App;
