import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';


class Dashboard extends React.Component {
  render() {
    const { projects, loggedIn } = this.props;
    if (!loggedIn) return <Redirect to='/sign-in'/>;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1" />
          <Notifications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({firestore, firebase}) => {
  return { 
    projects: firestore.ordered.projects,
    loggedIn: firebase.auth.uid ? true : false };
};

export default compose(
  connect(mapStateToProps),
  // firestoreConnect takes in a series of object
  // Whenever data in the store changes, the firestore reducer is triggered to update the state
  firestoreConnect([{ collection: 'projects' }])
)(Dashboard);
