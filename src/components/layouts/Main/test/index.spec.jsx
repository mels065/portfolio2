import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Main from '../../Main';

describe('<Main />', () => {
  it('renders', () => {
    const wrapper = shallow(<Main><div /></Main>);
    expect(wrapper.hasClass('main')).to.equal(true);
  });
});
