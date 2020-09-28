import React from 'react'
import { addContactCard, editContactCard } from '../actions/contactCardActions'
import { connect } from 'react-redux'

class ContactCardForm extends React.Component {

    state = {
        submitting: false,
        email: this.props.contactCard.email,
        phone: this.props.contactCard.phone,
        city: this.props.contactCard.city,
        state: this.props.contactCard.state
    }

    handleOnClick = () => {
        this.setState({submitting: true})
    }

    handleOnCancel = event => {
        event.preventDefault();
        this.setState({submitting: false})
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const { email, phone, city, state } = this.state

        this.props.contactCard.error ? this.props.addContactCard({email, phone, city, state, actor_id: this.props.actorID}) :
        this.props.editContactCard({email, phone, city, state}, this.props.acctorID)
        this.setState({
            submitting: false,
            email: this.props.contactCard.email,
            phone: this.props.contactCard.phone,
            city: this.props.contactCard.city,
            state: this.props.contactCard.state
        })
    }

    render(){
        return (
            this.state.submitting ?
            <form className='contact-card-form' onSubmit={this.handleOnSubmit}>
                <label for='email'>Email: </label>
                <input type='email' name='email' onChange={this.handleOnChange} value={this.state.email}/>
                <label for='phone'>Phone: </label>
                <input type='text' name='phone' placeholder='(xxx)xxx-xxxx' onChange={this.handleOnChange} value={this.state.phone}/>
                <label for='city'>City: </label>
                <input type='text' name='city' onChange={this.handleOnChange} value={this.state.city}/><br/>
                <label for='state'>State: </label>
                <input type='text' name='state' onChange={this.handleOnChange} value={this.state.state}/><br/>
                <input type='submit'/> <button onClick={this.handleOnCancel}>Cancel</button>
            </form> :
            <button onClick={this.handleOnClick}>Edit Contact Card</button>
        )
    }
}

export default connect( null, { addContactCard, editContactCard })(ContactCardForm)