import React from 'react'
import { connect } from 'react-redux'
import { fetchActor } from '../actions/actorActions'
import { Link } from 'react-router-dom'
import Picture from './Picture'



class ActorShow extends React.Component{

    handleBio = () => {

    }

    render(){
        // eslint-disable-next-line
        const actor = this.props.actors.find( actor => actor.id == this.props.id)
        if (this.props.loading || !actor) {
            return <div>Loading...</div>
        } 
            return (
                <div id='actor-show'>
                    <h1>{actor.first_name} {actor.last_name}</h1><br/>
                        <Picture actor={actor}/><br/>
                    <div className='links'>
                        <Link to={`/bio_card/${actor.id}`} >
                            Bio Card
                        </Link>
                        <br/>
                        <Link to={`/contact_card/${actor.id}`}>
                            Contact Card
                        </Link>
                    </div>
                </div>
            )
    }
}


export default connect(state => state.actors, {fetchActor})(ActorShow);