import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = props => {
  const { loggedIn } = props;
  if (!loggedIn) return <Redirect to="/sign-in" />;

  if (props.project) {
    const { authorFirstName, authorLastName, title, content } = props.project;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {`${authorFirstName} ${authorLastName}`}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container center">
      <p>Loading...</p>
    </div>
  );
};

const mapStateToProps = ({ firestore, firebase }, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(firestore);
  const projects = firestore.data.projects;
  const project = projects ? projects[id] : null;
  return { project, loggedIn: firebase.auth.uid ? true : false };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
