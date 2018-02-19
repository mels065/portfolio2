import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'semantic-ui-react';

import './style.scss';

const MessageDisplay = ({ message }) => (
  <Header as="h2" className="message-display">
    {message}
  </Header>
);

export default MessageDisplay;

MessageDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};
