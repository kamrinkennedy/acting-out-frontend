import React from 'react';
import { addPicture } from '../actions/actorActions';
import { connect } from 'react-redux';
import AddPictureButton from '../components/AddPictureButton';

class PictureForm extends React.Component {
  //Controlled Form State Setup
  state = {
    url: '',
    submitting: true,
  };

  //ADD PICTURE
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addPicture({
      url: event.target.url.value,
      id: this.props.actor.id,
    });
  };

  //Turn form to button
  handleCancel = (event) => {
    event.preventDefault();
    this.setState({ submitting: false });
  };

  render() {
    if (this.state.submitting) {
      //ADD PICTURE FORM
      return (
        <form className='picture-form' onSubmit={this.handleOnSubmit}>
          <input type='text' placeholder='Image URL ....' name='url'></input>
          <input type='submit' className='button' />
          <button className='button' onClick={this.handleCancel}>
            Cancel
          </button>
        </form>
      );
    }
    //ADD PICTURE BUTTON
    return <AddPictureButton actor={this.props.actor} />;
  }
}

export default connect((state) => state.actors, { addPicture })(PictureForm);
