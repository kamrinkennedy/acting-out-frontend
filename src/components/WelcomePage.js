import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div id='welcome'>
      <h1>Welcome to Acting Out!</h1>
      <h3>To get started, browse through your actors</h3>
      <Link to='/actors' className='link'>
        Browse
      </Link>
    </div>
  );
}
