import React from 'react';

import NOT_FOUND_HEADING from '../../../constants/NotFound';

import './style.scss';

const NotFound = () => (
  <div className="not-found">
    <h2 className="NotFound-heading">
      {NOT_FOUND_HEADING}
    </h2>
    <p>The requested document could not be found</p>
  </div>
);

export default NotFound;
