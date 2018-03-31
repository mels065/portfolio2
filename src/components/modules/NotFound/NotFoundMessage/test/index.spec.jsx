import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NotFoundMessage from '../../NotFoundMessage';

describe('<NotFoundMessage />', () => {
  it('renders', () => {
    const wrapper = shallow(<NotFoundMessage />);
    expect(wrapper.hasClass('not-found--message')).to.equal(true);
  });
});
