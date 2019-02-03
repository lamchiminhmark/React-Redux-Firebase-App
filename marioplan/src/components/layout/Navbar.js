import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const NavBar = props => {
  const sideLinks = props.loggedIn ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {sideLinks}
      </div>
    </nav>
  );
};

const mapStateToProps = ({ firebase }) => {
  return {
    loggedIn: firebase.auth.uid ? true : false
  };
};

export default connect(mapStateToProps)(NavBar);
