import React from 'react';

const ProjectDetails = props => {
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            necessitatibus nostrum totam rem mollitia doloremque tempore sit,
            odio, iure reiciendis omnis quidem ratione, nobis ipsam rerum
            officiis quibusdam quaerat architecto.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Minh Lam</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

// Can map state to props here that gets the appriate project information based on the id in ownProps
export default ProjectDetails;
