import React from 'react'
import { connect } from 'react-redux'
import { fetchActor } from '../actions/actorActions'
import { Link } from 'react-router-dom'


class ActorShow extends React.Component{

    handleBio = () => {

    }

    render(){
        // debugger;
        const actor = this.props.actors.find( actor => actor.id == this.props.id)
        if (this.props.loading || !actor) {
            return <div>Loading...</div>
        } 
            
    return (
        <div>
            <h1>{actor.first_name} {actor.last_name}</h1><br/>
            <Link to={`/actors/${actor.id}/bio_card`} >
                Bio Card
            </Link>
        
        </div>
        )
    }
}


export default connect(state => state.actors, {fetchActor})(ActorShow);