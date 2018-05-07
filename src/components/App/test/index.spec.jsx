import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../../App';

describe('<App />', () => {
  it('renders', () => {
    expect(shallow(<App />).hasClass('app')).to.equal(true);
  });
});
