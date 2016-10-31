import React from 'react';
import { Link } from 'react-router';

const Greeting = ({currentUser, logout}) => {
  if (currentUser){
    return (
      <div className="welcome">
        <h1>Hi {currentUser.username}</h1>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className='entry'>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/login'>Sign In</Link>
      </div>
    );
  }
};


export default Greeting;
