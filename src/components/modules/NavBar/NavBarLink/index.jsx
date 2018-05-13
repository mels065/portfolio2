import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const NavBarLink = ({ text, link }) => (
  <li className="nav-bar-link">
    <a href={link}>{text}</a>
  </li>
);

export default NavBarLink;

NavBarLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
