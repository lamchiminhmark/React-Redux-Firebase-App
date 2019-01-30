import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li><NavLink to='/create-project'>New Project</NavLink></li>
      <li><NavLink to='/signed-out'>Log Out</NavLink></li>
      <li><NavLink to='/signed-in' className='btn btn-floating pink linghten-1'>ML</NavLink></li> 
    </ul>
  );
};

export default SignedInLinks;
