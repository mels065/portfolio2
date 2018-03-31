import React from 'react';

import NotFoundHeading from './NotFoundHeading';
import NotFoundMessage from './NotFoundMessage';

import './style.scss';

const NotFound = () => (
  <div className="not-found">
    <NotFoundHeading />
    <NotFoundMessage />
  </div>
);

export default NotFound;
