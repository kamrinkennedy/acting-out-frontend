import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { fetchActors } from '../actions/actorActions'
import ActorCard from '../components/ActorCard'
import { Link, Switch, Route } from 'react-router-dom'
import ActorShow from '../components/ActorShow'

class ActorsContainer extends Component {

    componentDidMount(){
        this.props.fetchActors()
    }

    displayedActors(){
        return this.props.actors.map( actor => {
            return (
                <div key={actor.id}>
                    <ActorCard actor={actor} key={actor.id}/>
                </div>
            )
        })
    }
    
    render(){
        return (
            <div className='actors-container'>
                <Switch>
                    <Route path="/actors/:id" component={({match}) => {
                        return <ActorShow id={match.params.id}/>
                    }}/>
                    <Route exact path='/actors'>
                        {this.props.loading ?  <div>Loading...</div> : this.displayedActors()}
                    </Route>
                </Switch>
            </div>
        )
    }
}   


export default connect(state => state.actors, { fetchActors })(ActorsContainer)