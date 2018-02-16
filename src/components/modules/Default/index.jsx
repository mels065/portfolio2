import React from 'react';

import { Container } from 'semantic-ui-react';

import VisibleMessage from '../../../containers/VisibleMessage';

import './style.scss';

const Default = () => (
  <Container className="default">
    <VisibleMessage />
  </Container>
);

export default Default;
