import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CounterInput from '../../CounterInput';

describe('<CounterInput />', () => {
  const props = {
    spinnerVal: 1,
    incrementCounter: () => {},
    decrementCounter: () => {},
    onSpinnerChange: () => {},
  };

  it('renders', () => {
    const wrapper = shallow(<CounterInput {...props} />);
    expect(wrapper.hasClass('counter--input')).to.equal(true);
  });
});
