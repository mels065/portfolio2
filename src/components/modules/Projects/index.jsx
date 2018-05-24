import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project';

import './style.scss';

const Projects = ({ type, projects }) => (
  <section className="projects" id={type.split(' ').join('')}>
    <h3>{type}</h3>
    <ul>{projects.map(props => <Project {...props} />)}</ul>
  </section>
);

export default Projects;

Projects.propTypes = {
  type: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    demoURL: PropTypes.string.isRequired,
    repoURL: PropTypes.string.isRequired,
  }).isRequired,
};
