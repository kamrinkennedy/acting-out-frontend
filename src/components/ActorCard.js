import React from 'react'

export default function ActorCard(props){

    const {first_name, last_name} = props.actor

    return (
        <div className='actor-card'>
            <h1>{first_name} {last_name}</h1>
        </div>
    )
}