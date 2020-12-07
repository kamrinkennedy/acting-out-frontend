import React from 'react'
import BioCardForm from '../forms/BioCardForm'
import { connect } from 'react-redux'

function BioCard({bioCard, actorID}){

    const { age, weight, height, eye_color, hair_color } = bioCard

    return (
    bioCard.error ?
    <div className='bioCard'>
        <h1>Bio Not Found</h1>
        <BioCardForm bioCard={bioCard} actorID={actorID}/>
    </div>  :
    <div className='bioCard'>
        <h1>Bio Card</h1><br/>
        <h3>Age: {age} | Weight: {weight} | Height: {height}</h3><br/>
        <h3>Eye Color: {eye_color} | Hair Color: {hair_color}</h3><br/>
        <BioCardForm bioCard={bioCard} actorID={actorID}/>
    </div>
    )

}

export default connect( state => state.actors )(BioCard)