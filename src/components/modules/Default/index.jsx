import React from 'react';
import PropTypes from 'prop-types';

import { Header, Button } from 'semantic-ui-react';

import './style.scss';

const Default = ({ message, onHelloClick, onByeClick }) => (
  <div className="Default">
    <Header as="h2" className="Default-heading">{message}</Header>
    <Button
      primary
      onClick={
      message === 'Hello World'
        ? onByeClick
        : onHelloClick
    }
    >Change Message
    </Button>
  </div>
);

export default Default;

Default.propTypes = {
  message: PropTypes.string.isRequired,
  onHelloClick: PropTypes.func.isRequired,
  onByeClick: PropTypes.func.isRequired,
};
