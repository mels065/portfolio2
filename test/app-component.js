import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import App from '../src/components/App'

describe('<App />', function () {
  it('renders', function () {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).to.equal('<BrowserRouter />')
  })
})
