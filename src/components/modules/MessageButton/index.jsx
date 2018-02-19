import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import {
  MESSAGE_HELLO_MSG,
} from '../../../constants/Message';

import './style.scss';

const MessageButton = ({ message, onHelloClick, onByeClick }) => (
  <Button
    className="message-btn"
    onClick={
      message === MESSAGE_HELLO_MSG ?
        onByeClick :
        onHelloClick
    }
    primary
  >
    Change Message
  </Button>
);

export default MessageButton;

MessageButton.propTypes = {
  message: PropTypes.string.isRequired,
  onHelloClick: PropTypes.func.isRequired,
  onByeClick: PropTypes.func.isRequired,
};
