import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Footer from '../../Footer';

describe('<Footer />', () => {
  it('renders', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.hasClass('footer')).to.equal(true);
  });
});
