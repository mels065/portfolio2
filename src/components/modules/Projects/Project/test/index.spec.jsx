import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Project from '../../Project';

const {
  TYPE_OF_PROJECT: { FRONT_END },
} = require('../../../../../constants');

describe('<Project />', () => {
  const props = {
    name: 'Test',
    type: FRONT_END,
    thumbnail: 'test.jpg',
    description: 'This is a test...',
    demoURL: 'https://fakedemo.com/',
    repoURL: 'https://fakerepo.com/',
  };

  it('renders', () => {
    expect(shallow(<Project {...props} />).hasClass('project')).to.equal(true);
  });
});
