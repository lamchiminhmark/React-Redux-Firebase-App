import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { Switch, Route } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <Switch>
          <Route to="/signed-in" component={SignedInLinks} />
          <Route to="/signed-out" component={SignedOutLinks} />
        </Switch>
      </div>
    </nav>
  );
};

export default NavBar;
