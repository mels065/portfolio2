import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CounterDisplay from '../../CounterDisplay';

describe('<CounterDisplay />', () => {
  const props = {
    counter: 0,
  };

  it('renders', () => {
    const wrapper = shallow(<CounterDisplay {...props} />);
    expect(wrapper.hasClass('counter--display')).to.equal(true);
  });

  it('displays number', () => {
    const wrapper = shallow(<CounterDisplay {...props} />).render();
    expect(wrapper.text()).to.equal('0');
  })
});
