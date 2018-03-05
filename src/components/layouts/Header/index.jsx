import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import './style.scss';

const Header = ({ children }) => (
  <Container as="header" className="header">
    {children}
  </Container>
);

export default Header;

Header.propTypes = {
  children: PropTypes.element.isRequired,
};
