import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Projects = ({ type }) => (
  <section className="projects" id={type.split(' ').join('')}>
    <h3>{type}</h3>
    {/* Projects go here... */}
  </section>
);

export default Projects;

Projects.propTypes = {
  type: PropTypes.string.isRequired,
};
