import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import NavBar from '../../NavBar';

describe('<NavBar />', () => {
  it('renders', () => {
    expect(shallow(<NavBar />).hasClass('nav-bar')).to.equal(true);
  });
});
