import React from 'react'
import { connect } from 'react-redux'
import { fetchContact } from '../actions/contactCardActions'
import ContactCard from '../components/ContactCard'

class ContactCardContainer extends React.Component{

    componentDidMount(){
        this.props.fetchContact(this.props.actorID)
    }


    render(){
        // debugger;
        return (
            <div>
                {this.props.loading ? <h1>Loading...</h1> : <ContactCard contactCard={this.props.contactCard}/>}
            </div>
        )
    }

}

export default connect(state => state.contactCard, { fetchContact })(ContactCardContainer)