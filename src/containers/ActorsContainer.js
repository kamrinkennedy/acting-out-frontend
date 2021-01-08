import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchActors } from '../actions/actorActions';
import ActorCard from '../components/ActorCard';
import { Switch, Route } from 'react-router-dom';
import ActorShow from '../components/ActorShow';
import ActorForm from '../forms/ActorForm';
import SyncLoader from "react-spinners/SyncLoader"

function ActorsContainer(props) {
  useEffect(() => {
    props.fetchActors();
  }, []);

  const [actorSearch, setActorSearch] = useState('')

  const handleOnChange = (event) => {
    setActorSearch(event.target.value);
  }

  function displayedActors() {
    if (actorSearch){
      return props.actors.map((actor) => {
        const actorName = `${actor.first_name} ${actor.last_name}`.toLocaleLowerCase();
        if (actorName.includes(actorSearch.toLowerCase()))
        return (
          <div key={actor.id}>
            <ActorCard actor={actor} ke={actor.id}/>
          </div>
        )
      })
    }
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
        <input type='text' placeholder="Search for Actor" value={actorSearch} onChange={handleOnChange}></input>
        {props.loading ? (
          <SyncLoader loading={props.loading} />
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
