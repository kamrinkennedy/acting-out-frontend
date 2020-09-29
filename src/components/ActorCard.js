import React from 'react'
import Picture from './Picture.js'
import { Link } from 'react-router-dom'

export default function ActorCard(props){

    const {first_name, last_name} = props.actor

    return (
        <div className='actor-card'>
            <h1>{first_name} {last_name}</h1><br/>
            <Picture actor={props.actor} /><br/>
            <Link to={`/actors/${props.actor.id}`} className='link'>
                View Actor Profile
            </Link>
        </div>
    )
}

