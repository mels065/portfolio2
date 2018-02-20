import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CounterButton from '../../CounterButton';

describe('<CounterButton />', () => {
    const props = {
        spinnerVal: 1,
        clickHandler: () => {}
    }
    
    it('renders', () => {
        const wrapper = shallow(<CounterButton {...props} />);
        expect(wrapper.hasClass('counter-btn')).is.equal(true);
    });
    
    it('triggers `clickHandler` when clicked', () => {
        const spy = sinon.spy(props, 'clickHandler');
        const wrapper = shallow(<CounterButton {...props} />);
        wrapper.simulate('click');
        spy.restore();
    })
});
