import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../../Header';

describe('<Header />', () => {
  it('renders', () => {
    expect(shallow(<Header />).hasClass('header')).to.equal(true);
  });
});
