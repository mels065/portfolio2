import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NavBar from '../../NavBar';

describe('<NavBar />', () => {
  it('renders', () => {
    expect(shallow(<NavBar />).hasClass('nav-bar')).to.equal(true);
  });
});
