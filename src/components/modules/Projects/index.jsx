import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project';
import ProjectFilterPanel from './ProjectFilterPanel';

import './style.scss';

const {
  TYPE_OF_PROJECT: { ANY },
} = require('../../../constants');

const Projects = ({
  type,
  projects,
  currentFilter,
  removeFilter,
  filterFrontEnd,
  filterBackEnd,
  filterFullStack,
}) => (
  <section className="projects" id={type.split(' ').join('')}>
    <h3>{type}</h3>
    <ProjectFilterPanel {...{
 removeFilter, filterFrontEnd, filterBackEnd, filterFullStack,
}}
    />
    <ul>
      {(currentFilter === ANY
        ? projects
        : projects.filter(projectData => projectData.type === currentFilter)
      ).map(projectData => (
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
  currentFilter: PropTypes.string.isRequired,
  removeFilter: PropTypes.func.isRequired,
  filterFrontEnd: PropTypes.func.isRequired,
  filterBackEnd: PropTypes.func.isRequired,
  filterFullStack: PropTypes.func.isRequired,
};
