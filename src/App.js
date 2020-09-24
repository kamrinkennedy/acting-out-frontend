import React from 'react';
import './App.css';
import ActorsContainer from './containers/ActorsContainer'



class App extends React.Component {

  // componentDidMount(){
  //   this.fetchActors();
  // }

  render(){
    return (
      <div className="App">
        <ActorsContainer />
      </div>
    )
  }
}

export default App;
