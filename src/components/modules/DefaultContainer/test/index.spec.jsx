import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DefaultContainer from '../../DefaultContainer';

import {
  MESSAGE_HELLO_MSG,
} from '../../../../constants/Message';

describe('<DefaultContainer />', () => {
  const props = {
    message: MESSAGE_HELLO_MSG,
    onHelloClick: () => {},
    onByeClick: () => {},
  };

  it('renders', () => {
    const wrapper = shallow(<DefaultContainer {...props} />);
    expect(wrapper.hasClass('default')).to.equal(true);
  });
});
