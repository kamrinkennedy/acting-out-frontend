import React from 'react'
import ContactCardForm from '../forms/ContactCardForm'

export default function ContactCard(props){
    
    const { email, phone, city, state } = props.contactCard

    return(
        <div className='contact-card'>
            <h1>Contact Card</h1>
            <h3>Email: {email} | Phone: {phone} | City: {city} | State: {state}</h3>
            <ContactCardForm contactCard={props.contactCard} actorID={props.actorID}/>
        </div>
    )
}