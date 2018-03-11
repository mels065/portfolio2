import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Copyright from '../../Copyright';

describe('<Copyright />', () => {
  it('render', () => {
    const wrapper = shallow(<Copyright />);
    expect(wrapper.hasClass('copyright')).to.equal(true);
  });

  it('displays 2018 when that is the current year', () => {
    const clock = sinon.useFakeTimers(1520224067000);
    const wrapper = shallow(<Copyright />);
    expect(/2018/.test(wrapper.render().text())).to.equal(true);
    clock.restore();
  });

  it('displays 2018-XXXX when year is later than 2018', () => {
    const clock = sinon.useFakeTimers(1546380000000);
    const wrapper = shallow(<Copyright />);
    expect(/2018-2019/.test(wrapper.render().text())).to.equal(true);
    clock.restore();
  });
});
