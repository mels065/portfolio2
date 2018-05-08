import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Content from '../../Content';

describe('<Content />', () => {
  it('renders', () => {
    expect(shallow(<Content />).hasClass('content')).to.equal(true);
  });
});
