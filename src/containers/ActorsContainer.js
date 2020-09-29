import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { fetchActors } from '../actions/actorActions'
import ActorCard from '../components/ActorCard'
import { Switch, Route } from 'react-router-dom'
import ActorShow from '../components/ActorShow'
import ActorForm from '../forms/ActorForm'

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
                <Switch>
                    <Route path="/actors/:id" component={({match}) => {
                        return <div className='actors-container'><ActorShow id={match.params.id}/></div>
                    }}/>
                    <Route exact path='/actors'>
                        <ActorForm id='add-actor-button'/>
                        {this.props.loading ?  <div><h1>Loading...</h1></div> 
                        : <div className='actors-container'>{this.displayedActors()}</div>}
                    </Route>
                </Switch>
        )
    }
}   


export default connect(state => state.actors, { fetchActors })(ActorsContainer)