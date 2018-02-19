import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Default from '../../Default';

import {
  MESSAGE_HELLO_MSG,
} from '../../../../constants/Message';

describe('<Default />', () => {
  const props = {
    message: MESSAGE_HELLO_MSG,
    onHelloClick: () => {},
    onByeClick: () => {},
  };

  it('renders', () => {
    const wrapper = shallow(<Default {...props} />);
    expect(wrapper.hasClass('default')).to.equal(true);
  });
});
