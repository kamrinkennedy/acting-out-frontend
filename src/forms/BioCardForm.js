import React, { useState } from 'react';
import { addBioCard, editBioCard } from '../actions/bioCardActions';
import { connect } from 'react-redux';

function BioCardForm(props) {
  //Controlled Form State Setup
//   state = {
//     submitting: false,
//     age: this.props.bioCard.age,
//     weight: this.props.bioCard.weight,
//     height: this.props.bioCard.height,
//     eye_color: this.props.bioCard.eye_color,
//     hair_color: this.props.bioCard.hair_color,
//   };
  const [bio, setBio] = useState({
      submitting: false,
      age: props.bioCard.age,
      weight: props.bioCard.height,
      eye_color: props.bioCard.eye_color,
      hair_color: props.bioCard.hair_color
  })
  //Change state to match form values
  const handleOnChange = (event) => {
    setBio({
      ...bio,
      [event.target.name]: event.target.value,
    });
  };

  //Turn button to form
  const handleOnClick = () => {
    setBio({ ...bio, submitting: true });
  };

  //Turn form to button
  const handleOnCancel = (event) => {
    event.preventDefault();
    setBio({ ...bio, submitting: false });
  };

  //ADD BIO CARD
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const { age, weight, height, eye_color, hair_color } = bio;
    props.bioCard.error
      ? props.addBioCard({
          age,
          weight,
          height,
          eye_color,
          hair_color,
          actor_id: props.actorID,
        })
      : props.editBioCard(
          { age, weight, height, eye_color, hair_color },
          props.bioCard.id
        );

    setBio({
      ...bio,
      submitting: false,
    });
  };

    return bio.submitting ? (
      //BIO CARD FORM
      <form id='bio-card-form' onSubmit={handleOnSubmit}>
        <label for='age'>Age: </label>
        <input
          type='number'
          name='age'
          onChange={handleOnChange}
          value={bio.age}
        />
        <br />
        <label for='weight'>Weight: </label>
        <input
          type='number'
          name='weight'
          placeholder='in lbs...'
          onChange={handleOnChange}
          value={bio.weight}
        />
        <br />
        <label for='height'>Height: </label>
        <input
          type='text'
          name='height'
          placeholder="Ex.: 5'8"
          onChange={handleOnChange}
          value={bio.height}
        />
        <br />
        <label for='eye_color'>Eye Color: </label>
        <input
          type='text'
          name='eye_color'
          onChange={handleOnChange}
          value={bio.eye_color}
        />
        <br />
        <label for='hair_color'>Hair Color: </label>
        <input
          type='text'
          name='hair_color'
          onChange={handleOnChange}
          value={bio.hair_color}
        />
        <br />
        <input type='submit' className='button' />{' '}
        <button className='button' onClick={handleOnCancel}>
          Cancel
        </button>
      </form>
    ) : (
      //ADD BIO CARD BUTTON
      <button className='button' onClick={handleOnClick}>
        Edit Bio Card
      </button>
    );
}

export default connect(null, { addBioCard, editBioCard })(BioCardForm);
