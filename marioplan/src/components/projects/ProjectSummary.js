import React from 'react';

const ProjectSummary = ({ title }) => (
  <div className="card z-depth-0 project-summary">
    <span className="card-title">{title}</span>
    <p>Posted by Minh</p>
    <p className="grey-text">29th January, 2 pm</p>
  </div>
);

export default ProjectSummary


