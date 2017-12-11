import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import Default from '../../Default'
import {
  MESSAGE_HELLO,
  MESSAGE_BYE
} from '../../../constants/default'

describe('<Default />', function () {
  const props = {
    message: MESSAGE_HELLO,
    onHelloClick: () => {},
    onByeClick: () => {}
  }

  let spy
  afterEach(function () {
    if (spy) {
      spy.restore()
      spy = null
    }
  })

  it('renders', function () {
    const wrapper = shallow(<Default {...props} />)
    expect(wrapper.find('h2').text()).to.equal(MESSAGE_HELLO)
  })

  it(`should fire "onByeClick" dispatch when button is clicked with "${MESSAGE_HELLO}" as message`, function () {
    spy = sinon.spy(props, 'onByeClick')
    const wrapper = mount(<Default {...props} />)
    wrapper.find('button').simulate('click')
    expect(spy.calledOnce).to.equal(true)
  })

  it(`should fire "onHelloClick" dispatch when button is clicked with "${MESSAGE_BYE}" as message`, function () {
    spy = sinon.spy(props, 'onHelloClick')
    const wrapper = mount(<Default {...props} />)
    wrapper.setProps({ message: MESSAGE_BYE })
    wrapper.find('button').simulate('click')
    expect(spy.calledOnce).to.equal(true)
  })
})
