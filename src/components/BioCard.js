import React from 'react'
import BioCardForm from '../forms/BioCardForm'
import { connect } from 'react-redux'

function BioCard(props){
    // debugger
    const { age, weight, height, eye_color, hair_color } = props.bioCard
    // const actor = props.actors.find( actor => actor.id == props.actorID )
    // const { first_name, last_name } = actor
    // debugger;
    return (
    
    props.bioCard.error ?
    <div className='bioCard'>
        <h1>Bio Not Found</h1>
        <BioCardForm bioCard={props.bioCard} actorID={props.actorID}/>
    </div>  :
    <div className='bioCard'>
        <h1>Bio Card</h1><br/>
        <h3>Age: {age} | Weight: {weight} | Height: {height}</h3><br/>
        <h3>Eye Color: {eye_color} | Hair Color: {hair_color}</h3><br/>
        <BioCardForm bioCard={props.bioCard} actorID={props.actorID}/>
    </div>
    )

}

export default connect( state => state.actors )(BioCard)