import React from 'react';

import { Container } from 'semantic-ui-react';

import PageHeading from '../../modules/PageHeading';

import './style.scss';

const CounterSpinner = () => (
  <Container as="header" className="header">
    <PageHeading />
  </Container>
);

export default CounterSpinner;
