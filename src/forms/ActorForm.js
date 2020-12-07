import React, { useState } from 'react';
import { addActor } from '../actions/actorActions';
import { connect } from 'react-redux';

function ActorForm(props) {
  const [actor, setActor] = useState({submitting: false});

  //Turn button to form
  const handleOnClick = () => {
    setActor({ ...actor, submitting: true });
  };

  //Turn form to button
  const handleOnCancel = (event) => {
    event.preventDefault();
    setActor({ ...actor, submitting: false });
  };

  //Change state to match form values
  const handleOnChange = (event) => {
    setActor({
      ...actor,
      [event.target.name]: event.target.value,
    });
  };

  //ADD ACTOR TO DB
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newActor = {
      first_name: actor.first_name,
      last_name: actor.last_name,
    };
    props.addActor(newActor);
    setActor({ submitting: false });
  };

  return actor.submitting ? (
    // ACTOR FORM
    <form id='add-actor-form' onSubmit={handleOnSubmit}>
      <label for='first_name'>First Name: </label>
      <input
        type='text'
        name='first_name'
        onChange={handleOnChange}
        value={actor.first_name}
      />
      <br />
      <label for='last_name'>Last Name: </label>
      <input
        type='text'
        name='last_name'
        onChange={handleOnChange}
        value={actor.last_name}
      />
      <br />
      <input type='submit' className='button'></input>{' '}
      <button className='button' onClick={handleOnCancel}>
        Cancel
      </button>
    </form>
  ) : (
    // ADD ACTOR BUTTON
    <div id='add-actor-form'>
      <button id='add-actor-button' className='button' onClick={handleOnClick}>
        Add Actor
      </button>
    </div>
  );
}

export default connect(null, { addActor })(ActorForm);
