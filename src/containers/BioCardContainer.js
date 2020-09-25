import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBio } from '../actions/bioCardActions'

class BioCardContainer extends Component {

    componentDidMount(){
        this.props.fetchBio(this.props.actorID);
    }

    render(){
        return <div>biocard</div>
    }

}

export default connect( state => state.bioCard, { fetchBio } )(BioCardContainer)