import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Jumbotron from '../../Jumbotron';

describe('<PageHeading />', () => {
  it('renders', () => {
    expect(shallow(<Jumbotron />).hasClass('jumbotron')).to.equal(true);
  });
});
