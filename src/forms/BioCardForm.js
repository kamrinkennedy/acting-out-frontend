import React from 'react'
import {addBioCard, editBioCard} from '../actions/bioCardActions'
import { connect } from 'react-redux'

class BioCardForm extends React.Component {
    
    state = {
        submitting: false,
        age: this.props.bioCard.age,
        weight: this.props.bioCard.weight,
        height: this.props.bioCard.height,
        eye_color: this.props.bioCard.eye_color,
        hair_color: this.props.bioCard.hair_color
    }


    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnClick = () => {
        this.setState({submitting: true})
    }

    handleOnCancel = event => {
        event.preventDefault()
        this.setState({submitting: false})
    }
    
    handleOnSubmit = event => {
        event.preventDefault()
        const { age, weight, height, eye_color, hair_color } = this.state
        // debugger;   
        this.props.bioCard.error ? 
        this.props.addBioCard({age, weight, height, eye_color, hair_color, actor_id: this.props.actorID}) : 
        this.props.editBioCard({ age, weight, height, eye_color, hair_color}, this.props.bioCard.id)

        this.setState({
            submitting: false
        })
 
    }


    render(){
        return (
        this.state.submitting ?
        <form id='bio-card-form' onSubmit={this.handleOnSubmit}>
            <label for='age'>Age: </label>
            <input type='number' name='age' onChange={this.handleOnChange} value={this.state.age}/><br/>
            <label for='weight'>Weight: </label>
            <input type='number' name='weight' placeholder='in lbs...' onChange={this.handleOnChange} value={this.state.weight}/><br/>
            <label for='height'>Height: </label>
            <input type='text' name='height' placeholder="Ex.: 5'8" onChange={this.handleOnChange} value={this.state.height}/><br/>
            <label for='eye_color'>Eye Color: </label>
            <input type='text' name='eye_color' onChange={this.handleOnChange} value={this.state.eye_color}/><br/>
            <label for='hair_color'>Hair Color: </label>
            <input type='text' name='hair_color' onChange={this.handleOnChange} value={this.state.hair_color}/><br/>
            <input type='submit' className='button'/> <button className='button' onClick={this.handleOnCancel}>Cancel</button>
        </form> :
        <button className='button' onClick={this.handleOnClick}>Edit Bio Card</button>
        )
    }

}

export default connect(null, {addBioCard, editBioCard})(BioCardForm)