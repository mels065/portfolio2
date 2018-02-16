import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MessageButton from '../../MessageButton';

import {
  MESSAGE_HELLO_MSG,
  MESSAGE_BYE_MSG,
} from '../../../../constants/Message';

describe('<MessageButton />', () => {
  const props = {
    message: MESSAGE_HELLO_MSG,
    onHelloClick: () => {},
    onByeClick: () => {},
  };

  it('renders', () => {
    const wrapper = shallow(<MessageButton {...props} />);
    expect(wrapper.hasClass('message-btn')).to.equal(true);
  });

  it('calls onByeClick when clicked with "Hello World" as the message', () => {
    const spy = sinon.spy(props, 'onByeClick');
    const wrapper = mount(<MessageButton {...props} />);
    wrapper.simulate('click');
    sinon.assert.calledOnce(spy);
    spy.restore();
  });

  it('calls onHelloClick when clicked with "Bye World" as the message', () => {
    const spy = sinon.spy(props, 'onHelloClick');
    const wrapper = mount(<MessageButton {...{ ...props, message: MESSAGE_BYE_MSG }} />);
    wrapper.simulate('click');
    sinon.assert.calledOnce(spy);
    spy.restore();
  });
});
