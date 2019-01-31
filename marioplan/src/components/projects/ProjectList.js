import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {projects.map(project => (
        <ProjectSummary {...project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;