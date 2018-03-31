import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Content from '../../Content';

describe('<Main />', () => {
  it('renders', () => {
    const wrapper = shallow(<Content><div /></Content>);
    expect(wrapper.hasClass('content')).to.equal(true);
  });
});
