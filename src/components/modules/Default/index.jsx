import React from 'react';

import { Container } from 'semantic-ui-react';

import VisibleMessage from '../../../containers/VisibleMessage';
import VisibleCounter from '../../../containers/VisibleCounter';

import './style.scss';

const Default = () => (
  <Container className="default">
    <VisibleMessage />
    <VisibleCounter />
  </Container>
);

export default Default;
