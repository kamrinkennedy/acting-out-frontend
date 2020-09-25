import React from 'react'
import { connect } from 'react-redux'
import { fetchActor } from '../actions/actorActions'
import { Link, Switch, Route } from 'react-router-dom'
import { BioCardContainer } from '../containers/BioCardContainer'


class ActorShow extends React.Component{

    handleBio = () => {

    }

    render(){
        // debugger;
        // eslint-disable-next-line
        const actor = this.props.actors.find( actor => actor.id == this.props.id)
        if (this.props.loading || !actor) {
            return <div>Loading...</div>
        } 
            
    return (
        <div>
            <h1>{actor.first_name} {actor.last_name}</h1><br/>
            <Link to={`/bio_card/${actor.id}`} >
                Bio Card
            </Link>
        
        </div>
        )
    }
}


export default connect(state => state.actors, {fetchActor})(ActorShow);