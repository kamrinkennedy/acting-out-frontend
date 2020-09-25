import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { fetchActors } from '../actions/actorActions'
import ActorCard from '../components/ActorCard'
import { Link, Switch, Route } from 'react-router-dom'
import ActorShow from '../components/ActorShow'
import BioCardContainer from './BioCardContainer'


class ActorsContainer extends Component {

    componentDidMount(){
        // debugger;
        this.props.fetchActors()
    }

    // displayBio(){
    //     return (
    //         <div>
    //             <Link to={`/actors/${actor.id}/bio_card`}>
    //                 Bio Card
    //             </Link>
    //         </div>
    //     )
    // }

    displayedActors(){
        debugger;
        return this.props.actors.map( actor => {
            return (
                <div>
                    <ActorCard actor={actor} key={actor.id}/>
                    <Link to={`/actors/${actor.id}`}>
                        View Actor Profile
                    </Link>
                </div>
            )
        })
    }
    
    render(){
        // debugger;
        return (
        <Switch>
            <Route path="/actors/:id" component={({match}) => {
                // debugger;
                return <ActorShow id={match.params.id}/>
            }}/>
            <Route exact path='/actors'>
                {this.props.loading ?  <div>Loading...</div> : this.displayedActors()}
            </Route>
            <Route path='actors/:id/bio_card' component={({match}) => {
                return <BioCardContainer actorID={match.params.id}/>
            }}>
            </Route>
            <Route>

            </Route>
        </Switch>
        )

    }
}   


export default connect(state => state.actors, { fetchActors })(ActorsContainer)