import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { fetchActors } from '../actions/actorActions'

const baseURL = 'http://localhost:3001'

class ActorsContainer extends Component {

    componentDidMount(){
        this.props.fetchActors()
    }
    

    render(){
        
        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
            let displayedActors = this.props.actors
            return displayedActors.map( actor => {
                return <div><h1>{actor.first_name} {actor.last_name}</h1></div>
            })
        }
    }   
}

export default connect(state => state, { fetchActors })(ActorsContainer)