import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NotFound from '../../NotFoundHeading';

describe('<NotFoundHeading />', () => {
  it('renders', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.hasClass('not-found--heading')).to.equal(true);
  });
});
