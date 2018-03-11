import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import PageHeading from '../../PageHeading';

describe('<PageHeading />', () => {
  it('renders', () => {
    const wrapper = shallow(<PageHeading />);
    expect(wrapper.hasClass('page-heading')).to.equal(true);
  });
});
