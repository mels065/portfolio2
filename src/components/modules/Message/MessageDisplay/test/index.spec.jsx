import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import MessageDisplay from '../../MessageDisplay';

import {
  MESSAGE_HELLO_MSG,
} from '../../../../../constants/Message';

describe('<MessageDisplay />', () => {
  const props = {
    message: MESSAGE_HELLO_MSG,
  };

  it('renders', () => {
    const wrapper = shallow(<MessageDisplay {...props} />);
    expect(wrapper.hasClass('message--display')).to.equal(true);
  });

  it('displays text', () => {
    const wrapper = shallow(<MessageDisplay {...props} />).render();
    expect(wrapper.text()).to.equal(MESSAGE_HELLO_MSG);
  });
});
