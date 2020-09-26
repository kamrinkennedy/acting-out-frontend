import React from 'react'
import { connect } from 'react-redux'
import { fetchActor } from '../actions/actorActions'
import { Link, Switch, Route } from 'react-router-dom'
import Picture from './Picture'
import PictureForm from '../forms/PictureForm'


class ActorShow extends React.Component{

    handleBio = () => {

    }

    render(){
        // eslint-disable-next-line
        const actor = this.props.actors.find( actor => actor.id == this.props.id)
        if (this.props.loading || !actor) {
            return <div>Loading...</div>
        } 
        // debugger;
        // if (actor.picture_url){
            return (
                <div className='actor-show'>
                    <h1>{actor.first_name} {actor.last_name}</h1><br/>
                    <Picture actor={actor}/><br/>
                    <Link to={`/bio_card/${actor.id}`} >
                        Bio Card
                    </Link>
                </div>
                )
        // }
            // return (
            //     <div className='actor-show'>
            //         <h1>{actor.first_name} {actor.last_name}</h1><br/>
            //         <p>Add Profile Picture</p>
            //         <PictureForm actor={actor}/><br/>
            //         <Link to={`/bio_card/${actor.id}`} >
            //             Bio Card
            //         </Link>
            //     </div>
            // )
    }
}


export default connect(state => state.actors, {fetchActor})(ActorShow);