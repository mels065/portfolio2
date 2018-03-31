import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children }) => (
  <footer className="footer">
    {children}
  </footer>
);

export default Footer;

Footer.propTypes = {
  children: PropTypes.element,
};

Footer.defaultProps = {
  children: null,
};
