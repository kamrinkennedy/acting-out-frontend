import React from 'react'
import { addActor } from '../actions/actorActions'
import { connect } from 'react-redux'

class ActorForm extends React.Component {
    state = {
        submitting: false,
        first_name: '',
        last_name: ''
    }

    handleOnClick = event => {
        event.preventDefault()
        this.setState({submitting: true})
    }

    handleOnCancel = event => {
        event.preventDefault()
        this.setState({submitting: false})
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const actor = {first_name: this.state.first_name, last_name: this.state.last_name}
        // debugger;
        this.props.addActor(actor)
        this.setState({submitting: false})

    }

    render(){
        
        return ( this.state.submitting ? 
        <form id='add-actor-form' onSubmit={this.handleOnSubmit}>
            <label for='first_name' >First Name: </label>
            <input type='text' name='first_name' onChange={this.handleOnChange} value={this.state.first_name}/><br/>
            <label for='last_name'>Last Name: </label>
            <input type='text' name='last_name' onChange={this.handleOnChange} value={this.state.last_name}/><br/>
            <input type='submit'></input> <button onClick={this.handleOnCancel}>Cancel</button>
        </form> :
        <button id='add-actor-button' onClick={this.handleOnClick}>Add Actor</button>
        )
    }

}

export default connect(null, {addActor})(ActorForm)