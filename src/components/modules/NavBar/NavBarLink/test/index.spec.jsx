import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NavBarLink from '../../NavBarLink';

describe('<NavBarLink />', () => {
  const props = {
    text: 'TestLink',
    link: '#test',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBarLink {...props} />);
  });

  it('renders', () => {
    expect(wrapper.hasClass('nav-bar-link')).to.equal(true);
  });

  it('has an href', () => {
    expect(new RegExp(`href="${props.link}"`).test(wrapper.html())).to.equal(true);
  });
});
