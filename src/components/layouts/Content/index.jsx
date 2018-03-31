import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Content = ({ children }) => (
  <main className="content">
    {children}
  </main>
);

export default Content;

Content.propTypes = {
  children: PropTypes.element.isRequired,
};
