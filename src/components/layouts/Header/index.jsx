import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ children }) => (
  <header className="header">
    {children}
  </header>
);

export default Header;

Header.propTypes = {
  children: PropTypes.element,
};

Header.defaultProps = {
  children: null,
};
