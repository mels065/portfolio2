import React from 'react';
import PropTypes from 'prop-types';

const NavBarLink = ({ text, link }) => (
  <a className="nav-bar-link" href={link}>{text}</a>
);

export default NavBarLink;

NavBarLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
