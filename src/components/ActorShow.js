import React from 'react';
import { connect } from 'react-redux';
import { fetchActor } from '../actions/actorActions';
import { Link } from 'react-router-dom';
import Picture from './Picture';
import ClipLoader from "react-spinners/ClipLoader"

function ActorShow(props) {
  const actor = props.actors.find((actor) => actor.id == props.id);
  if (props.loading || !actor) {
    return <ClipLoader size={150} loading={props.loading}/>
  }
  return (
    <div id='actor-show'>
      <h1>
        {actor.first_name} {actor.last_name}
      </h1>
      <br />
      <Picture actor={actor} />
      <br />
      <div className='links'>
        <Link to={`/bio_card/${actor.id}`} className='link'>
          Bio Card
        </Link>
        <Link to={`/contact_card/${actor.id}`} className='link'>
          Contact Card
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}

export default connect((state) => state.actors, { fetchActor })(ActorShow);
