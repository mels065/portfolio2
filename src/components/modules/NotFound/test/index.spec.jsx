import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NotFound from '../../NotFound';

describe('<NotFound />', () => {
  it('renders', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.hasClass('not-found')).to.equal(true);
  });
});
