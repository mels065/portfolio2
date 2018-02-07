import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import './style.scss';

const Main = ({ children }) => (
  <Container className="Main" as="main" textAlign="center">
    {children}
  </Container>
);

export default Main;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
