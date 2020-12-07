import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchActors } from '../actions/actorActions';
import ActorCard from '../components/ActorCard';
import { Switch, Route } from 'react-router-dom';
import ActorShow from '../components/ActorShow';
import ActorForm from '../forms/ActorForm';

function ActorsContainer(props) {
  useEffect(() => {
    props.fetchActors();
  }, []);

  function displayedActors() {
    return props.actors.map((actor) => {
      return (
        <div key={actor.id}>
          <ActorCard actor={actor} key={actor.id} />
        </div>
      );
    });
  }

  return (
    <Switch>
      <Route
        path='/actors/:id'
        component={({ match }) => {
          return (
            <div className='actors-container'>
              <ActorShow id={match.params.id} />
            </div>
          );
        }}
      />
      <Route exact path='/actors'>
        <ActorForm id='add-actor-button' />
        {props.loading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className='actors-container'>{displayedActors()}</div>
        )}
      </Route>
    </Switch>
  );
}

export default connect((state) => state.actors, { fetchActors })(
  ActorsContainer
);
