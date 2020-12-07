import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBio } from '../actions/bioCardActions';
import BioCard from '../components/BioCard';
import ClipLoader from "react-spinners/ClipLoader"

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

  return <div>{props.loading ? <ClipLoader size={100} loading={props.loading}/> : displayBio()}</div>;
}

export default connect((state) => state.bioCard, { fetchBio })(
  BioCardContainer
);
