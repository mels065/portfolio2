import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project';

import './style.scss';

const Projects = ({ type, projects }) => (
  <section className="projects" id={type.split(' ').join('')}>
    <h3>{type}</h3>
    <ul>
      {projects.map(projectData => (
        <Project
          key={projectData.name
            .toLowerCase()
            .split(' ')
            .join('-')}
          {...projectData}
        />
      ))}
    </ul>
  </section>
);

export default Projects;

Projects.propTypes = {
  type: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    demoURL: PropTypes.string.isRequired,
    repoURL: PropTypes.string.isRequired,
  })).isRequired,
};
