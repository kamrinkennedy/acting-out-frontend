import React from 'react';
import AddPictureButton from './AddPictureButton';

export default function Picture({ actor }) {
  const { picture_url } = actor;

  if (picture_url) {
    return (
      <div style={{ height: '400px', width: '400px' }}>
        <img
          src={picture_url}
          alt='Profile Picture'
          className='profile-picture'
        />
        <br />
      </div>
    );
  } else {
    return <AddPictureButton actor={actor} />;
  }
}
