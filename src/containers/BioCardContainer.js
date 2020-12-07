import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBio } from '../actions/bioCardActions';
import BioCard from '../components/BioCard';

class BioCardContainer extends Component {
  componentDidMount() {
    this.props.fetchBio(this.props.actorID);
  }

  displayBio() {
    return (
      <div className='bioCard'>
        <BioCard bioCard={this.props.bioCard} actorID={this.props.actorID} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.loading ? <div>Loading...</div> : this.displayBio()}
      </div>
    );
  }
}

export default connect((state) => state.bioCard, { fetchBio })(
  BioCardContainer
);
