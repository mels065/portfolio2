import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import NOT_FOUND_HEADING from '../../../../constants/NotFound';
import NotFound from '../../NotFound';

describe('<NotFound />', () => {
  it('renders', () => {
    const wrapper = mount(<NotFound />);
    expect(wrapper.find('h2').text()).to.equal(NOT_FOUND_HEADING);
  });
});
