import { expect } from 'chai';

import filterFactory from '../filter';

const {
  TYPE_OF_PROJECT: {
    ANY, FRONT_END, BACK_END, FULL_STACK,
  },
} = require('../../../constants');

describe('filter helper (models)', () => {
  const filterObj = filterFactory([]);

  it('has state', () => {
    expect(filterObj.state).to.deep.equal({
      currentFilter: ANY,
      projects: [],
    });
  });

  it('has removeFilter reducer', () => {
    expect(filterObj.reducers.removeFilter()).to.equal(ANY);
  });

  it('has filterFrontEnd reducer', () => {
    expect(filterObj.reducers.filterFrontEnd()).to.equal(FRONT_END);
  });

  it('has filterBackEnd reducer', () => {
    expect(filterObj.reducers.filterBackEnd()).to.equal(BACK_END);
  });

  it('has filterFullStack reducer', () => {
    expect(filterObj.reducers.filterFullStack()).to.equal(FULL_STACK);
  });
});
