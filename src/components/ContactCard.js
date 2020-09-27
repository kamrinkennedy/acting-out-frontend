import React from 'react'

export default function ContactCard(props){
    // debugger;
    const { email, phone, city, state } = props.contactCard
    return(
        <div className='contact-card'>
            <h1>Contact Card</h1>
            <h3>Email: {email} | Phone: {phone} | City: {city}, {state}</h3>
        </div>
    )
}