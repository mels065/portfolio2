import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { NOT_FOUND_HEADING } from '../../../constants/not-found'
import NotFound from '../../NotFound'

describe('<NotFound />', function () {
  it('renders', function () {
    const wrapper = shallow(<NotFound />)
    expect(wrapper.find('h2').text()).to.equal(NOT_FOUND_HEADING)
  })
})
