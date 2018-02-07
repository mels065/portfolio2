import React from 'react';
import { Header } from 'semantic-ui-react';

import NOT_FOUND_HEADING from '../../../constants/NotFound';

import './style.scss';

const NotFound = () => (
  <div className="NotFound">
    <Header as="h2" color="red" className="NotFound-heading">
      {NOT_FOUND_HEADING}
    </Header>
    <p>The requested document could not be found</p>
  </div>
);

export default NotFound;
