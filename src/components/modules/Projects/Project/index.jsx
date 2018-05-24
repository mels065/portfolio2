import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Project = ({
  name, type, description, thumbnail, demoURL, repoURL,
}) => (
  <li className="project">
    <h4>{name}</h4>
    <h5>Type: {type}</h5>
    <img
      src={thumbnail}
      alt={name
        .toLowerCase()
        .split(' ')
        .join('')}
    />
    <p>{description}</p>
    <div className="project-links">
      <a href={demoURL}>Demo</a>
      <a href={repoURL}>Repo</a>
    </div>
  </li>
);

export default Project;

Project.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  demoURL: PropTypes.string.isRequired,
  repoURL: PropTypes.string.isRequired,
};
