import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MessageDisplay = ({ message }) => (
  <h2 className="message--display">
    {message}
  </h2>
);

export default MessageDisplay;

MessageDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};
