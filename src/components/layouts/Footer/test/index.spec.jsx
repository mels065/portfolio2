import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Footer from '../../Footer';

describe('<Footer />', () => {
  it('renders', () => {
    expect(shallow(<Footer />).hasClass('footer')).to.equal(true);
  });
});
