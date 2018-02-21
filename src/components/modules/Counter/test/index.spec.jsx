import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Counter from '../../Counter';

describe('<Counter />', () => {
    const props = {
        spinnerVal: 1,
        incrementCounter: () => {},
        decrementCounter: () => {},
        onSpinnerChange: () => {},
    };
    
    it('renders', () => {
        const wrapper = shallow(<Counter {...props} />);
        expect(wrapper.hasClass('counter')).to.equal(true);
    });
});
