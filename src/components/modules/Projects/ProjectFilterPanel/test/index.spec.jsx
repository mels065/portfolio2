import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ProjectFilterPanel from '../../ProjectFilterPanel';

describe('<ProjectFilterPanel />', () => {
  const props = {
    removeFilter: () => {},
    filterFrontEnd: () => {},
    filterBackEnd: () => {},
    filterFullStack: () => {},
  };

  it('renders', () => {
    expect(shallow(<ProjectFilterPanel {...props} />).hasClass('project-filter-panel')).to.equal(true);
  });
});
