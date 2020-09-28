import React from 'react'
import { addPicture } from '../actions/actorActions'
import { connect } from 'react-redux'
import AddPictureButton from '../components/AddPictureButton'

class PictureForm extends React.Component {

    state = {
        url: '',
        submitting: true
    }

    handleOnSubmit = (event) =>{
        // debugger;
        event.preventDefault()
        this.props.addPicture({url: event.target.url.value, id: this.props.actor.id})
    }

    handleCancel =(event) =>{
        event.preventDefault()
        this.setState({submitting: false})
    }

    render(){
        if (this.state.submitting) {
            return (
                <form className='picture-form' onSubmit={this.handleOnSubmit}>
                    <input type='text' placeholder='Image URL ....' name='url'></input>
                    <input type='submit' className='button'/><button className='button' onClick={this.handleCancel}>Cancel</button>
                </form>
                )
        } 
        return <AddPictureButton actor={this.props.actor}/>
    }
}

export default connect(state => state.actors, { addPicture })(PictureForm)