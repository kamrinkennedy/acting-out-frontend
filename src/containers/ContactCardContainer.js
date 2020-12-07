import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchContact } from '../actions/contactCardActions';
import ContactCard from '../components/ContactCard';
import ClipLoader from "react-spinners/ClipLoader"

function ContactCardContainer(props) {
  useEffect(() => {
    props.fetchContact(props.actorID);
  }, []);

  return (
    <div>
      {props.loading ? (
        <ClipLoader size={100} loading={props.loading}/>
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
