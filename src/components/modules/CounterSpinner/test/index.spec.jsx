import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CounterSpinner from '../../CounterSpinner';

describe('<CounterSpinner />', () => {
  const props = {
    spinnerVal: 1,
    onSpinnerChange: () => {},
  };

  it('renders', () => {
    const wrapper = shallow(<CounterSpinner {...props} />);
    expect(wrapper.hasClass('counter-spinner')).to.equal(true);
  });

  it('calls `onSpinnerChange` when change event is triggered', () => {
    const spy = sinon.spy(props, 'onSpinnerChange');
    const wrapper = shallow(<CounterSpinner {...props} />);
    wrapper.simulate('change', { target: { value: 1 } });
    sinon.assert.calledOnce(spy);
    spy.restore();
  });
});
