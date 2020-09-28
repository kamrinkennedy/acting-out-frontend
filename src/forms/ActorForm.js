import React from 'react'
import { addActor } from '../actions/actorActions'
import { connect } from 'react-redux'

class ActorForm extends React.Component {

    //Controlled Form State Setup
    state = {
        submitting: false,
        first_name: '',
        last_name: ''
    }

    //Turn button to form
    handleOnClick = () => {
        this.setState({submitting: true})
    }

    //Turn form to button
    handleOnCancel = event => {
        event.preventDefault()
        this.setState({submitting: false})
    }

    //Change state to match form values
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //ADD ACTOR TO DB
    handleOnSubmit = event => {
        event.preventDefault()
        const actor = {first_name: this.state.first_name, last_name: this.state.last_name}
        // debugger;
        this.props.addActor(actor)
        this.setState({submitting: false})

    }

    render(){
        
        return ( this.state.submitting ? 
            // ACTOR FORM
        <form id='add-actor-form' onSubmit={this.handleOnSubmit}>
            <label for='first_name' >First Name: </label>
            <input type='text' name='first_name' onChange={this.handleOnChange} value={this.state.first_name}/><br/>
            <label for='last_name'>Last Name: </label>
            <input type='text' name='last_name' onChange={this.handleOnChange} value={this.state.last_name}/><br/>
            <input type='submit'></input> <button onClick={this.handleOnCancel}>Cancel</button>
        </form> :
            // ADD ACTOR BUTTON
        <button id='add-actor-button' onClick={this.handleOnClick}>Add Actor</button>
        )
    }

}

export default connect(null, {addActor})(ActorForm)