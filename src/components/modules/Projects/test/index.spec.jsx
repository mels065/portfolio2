import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Projects from '../../Projects';

const { TYPE_OF_PROJECT: FRONT_END } = require('../../../../constants');

describe('<Projects />', () => {
  const props = {
    type: 'Testing',
    projects: [
      {
        name: 'Test',
        type: FRONT_END,
        description: 'This is a test...',
        demoURL: 'https://fakedemo.com/',
        repoURL: 'https://fakerepo.com/',
      },
    ],
  };

  it('renders', () => {
    expect(shallow(<Projects {...props} />).hasClass('projects')).to.equal(true);
  });
});
