import React from 'react'
import BioCardForm from '../forms/BioCardForm'

export default function BioCard(props){
    const { age, weight, height, eye_color, hair_color } = props.bioCard
    return (
    <div className='bioCard'>
        <h1>Bio Card</h1><br/>
        <h3>Age: {age} | Weight: {weight} | Height: {height}</h3><br/>
        <h3>Eye Color: {eye_color} | Hair Color: {hair_color}</h3><br/>
        <BioCardForm bioCard={props.bioCard} actorID={props.actorID}/>
    </div>
    )

}