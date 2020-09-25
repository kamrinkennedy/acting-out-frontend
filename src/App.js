import React from 'react';
import './App.css';
import ActorsContainer from './containers/ActorsContainer'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {



  render(){

    return (
      <div className="App">
        <Switch>
          <Route path='/actors'>
            <ActorsContainer />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
