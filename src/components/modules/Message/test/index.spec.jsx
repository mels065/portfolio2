import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Message from '../../Message';

import {
  MESSAGE_HELLO_MSG,
} from '../../../../constants/Message';

describe('<Message />', () => {
  const props = {
    message: MESSAGE_HELLO_MSG,
    onHelloClick: () => {},
    onByeClick: () => {},
  };

  it('renders', () => {
    const wrapper = shallow(<Message {...props} />);
    expect(wrapper.hasClass('message')).to.equal(true);
  });
});
