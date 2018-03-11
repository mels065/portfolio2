import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../../Header';

describe('<Header />', () => {
  it('renders', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.hasClass('header')).to.equal(true);
  });
});
