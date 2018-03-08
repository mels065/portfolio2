import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

const Footer = ({ children }) => (
  <Container as="footer" className="footer">
    {children}
  </Container>
);

export default Footer;

Footer.propTypes = {
  children: PropTypes.element,
};

Footer.defaultProps = {
  children: null,
};
