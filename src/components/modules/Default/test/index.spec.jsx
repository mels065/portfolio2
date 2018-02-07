import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Default from '../../Default';
import {
  MESSAGE_HELLO,
  MESSAGE_BYE,
} from '../../../../constants/Default';

describe('<Default />', () => {
  const props = {
    message: MESSAGE_HELLO,
    onHelloClick: () => {},
    onByeClick: () => {},
  };

  let spy;
  afterEach(() => {
    if (spy) {
      spy.restore();
      spy = null;
    }
  });

  it('renders', () => {
    const wrapper = mount(<Default {...props} />);
    expect(wrapper.find('h2').text()).to.equal(MESSAGE_HELLO);
  });

  it(`should fire "onByeClick" dispatch when button is clicked with "${MESSAGE_HELLO}" as message`, () => {
    spy = sinon.spy(props, 'onByeClick');
    const wrapper = mount(<Default {...props} />);
    wrapper.find('button').simulate('click');
    expect(spy.calledOnce).to.equal(true);
  });

  it(`should fire "onHelloClick" dispatch when button is clicked with "${MESSAGE_BYE}" as message`, () => {
    spy = sinon.spy(props, 'onHelloClick');
    const wrapper = mount(<Default {...props} />);
    wrapper.setProps({ message: MESSAGE_BYE });
    wrapper.find('button').simulate('click');
    expect(spy.calledOnce).to.equal(true);
  });
});
