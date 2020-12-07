import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBio } from '../actions/bioCardActions';
import BioCard from '../components/BioCard';

function BioCardContainer(props) {
  useEffect(() => {
    props.fetchBio(props.actorID);
  }, []);

  function displayBio() {
    return (
      <div className='bioCard'>
        <BioCard bioCard={props.bioCard} actorID={props.actorID} />
      </div>
    );
  }

  return <div>{props.loading ? <div>Loading...</div> : displayBio()}</div>;
}

export default connect((state) => state.bioCard, { fetchBio })(
  BioCardContainer
);
