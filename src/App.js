import React from 'react';
import './App.css';
import ActorsContainer from './containers/ActorsContainer'
import { Switch, Route, Redirect } from 'react-router-dom'
import BioCardContainer from './containers/BioCardContainer'
import ContactCardContainer from './containers/ContactCardContainer'
import Navbar from './components/Navbar'
import WelcomePage from './components/WelcomePage'

class App extends React.Component {

  render(){

    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <WelcomePage />
          </Route>
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
