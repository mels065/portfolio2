import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Projects from '../../Projects';

describe('<Projects />', () => {
  const props = {
    type: 'Testing',
  };

  it('renders', () => {
    expect(shallow(<Projects {...props} />).hasClass('projects')).to.equal(true);
  });
});
