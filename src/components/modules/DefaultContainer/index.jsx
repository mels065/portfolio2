import React from 'react';

import VisibleMessage from '../../../containers/VisibleMessage';
import VisibleCounter from '../../../containers/VisibleCounter';

import './style.scss';

const DefaultContainer = () => (
  <div className="default">
    <VisibleMessage />
    <VisibleCounter />
  </div>
);

export default DefaultContainer;
