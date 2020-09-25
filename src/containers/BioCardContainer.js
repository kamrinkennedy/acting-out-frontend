import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBio } from '../actions/bioCardActions'
import { Switch, Route } from 'react-router-dom'

class BioCardContainer extends Component {

    componentDidMount(){
        this.props.fetchBio(this.props.actorID);
    }

    displayBio(){
        // debugger;
        // let actor = this.props.actors.actors.find( actor => actor.id === this.props.actorID)
        let { age, weight, height, eye_color, hair_color } = this.props.bioCard
        return (
            <div className='bioCard'>
                <h1>Bio Card</h1><br/>
                <h3>Age: {age} | Weight: {weight} | Height: {height}</h3><br/>
                <h3>Eye Color: {eye_color} | Hair Color: {hair_color}</h3>
            </div>
        )
    }

    render(){
        
        return (
            <div>
                {this.props.loading ? <div>Loading...</div> : this.displayBio()}
            </div>
        )
    }

}

export default connect( state => state.bioCard, { fetchBio } )(BioCardContainer)