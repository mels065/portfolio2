import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AboutMe from '../../AboutMe';

describe('<AboutMe />', () => {
  it('renders', () => {
    expect(shallow(<AboutMe />).hasClass('about-me')).to.equal(true);
  });
});
