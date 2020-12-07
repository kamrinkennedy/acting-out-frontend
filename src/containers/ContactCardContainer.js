import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchContact } from '../actions/contactCardActions';
import ContactCard from '../components/ContactCard';

function ContactCardContainer(props) {
  useEffect(() => {
    props.fetchContact(props.actorID);
  }, []);

  return (
    <div>
      {props.loading ? (
        <h1>Loading...</h1>
      ) : (
        <ContactCard
          contactCard={props.contactCard}
          actorID={props.actorID}
        />
      )}
    </div>
  );
}

export default connect((state) => state.contactCard, { fetchContact })(
  ContactCardContainer
);
