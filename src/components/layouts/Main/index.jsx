import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Main = ({ children }) => (
  <main className="main">
    {children}
  </main>
);

export default Main;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
