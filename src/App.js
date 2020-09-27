import React from 'react';
import './App.css';
import ActorsContainer from './containers/ActorsContainer'
import { Switch, Route } from 'react-router-dom'
import BioCardContainer from './containers/BioCardContainer'
import ContactCardContainer from './containers/ContactCardContainer'

class App extends React.Component {

  render(){

    return (
      <div className="App">
        <Switch>
          <Route path='/actors'>
            <ActorsContainer />
          </Route>
          <Route path='/bio_card/:id' component={({match}) => {
              return <BioCardContainer actorID={match.params.id}/>
            }}>
          </Route>
          <Route path='/contact_card/:id' component={({match}) => {
              return <ContactCardContainer actorID={match.params.id}/>
            }}>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
