import { expect } from 'chai'

import {
  defaultHello,
  defaultBye
} from '../default'
import {
  DEFAULT_HELLO,
  DEFAULT_BYE
} from '../../constants/default'

describe('defaultHello action', function () {
  it('returns the correct action', function () {
    expect(defaultHello()).to.have.property('type', DEFAULT_HELLO)
  })
})

describe('defaultBye action', function () {
  it('returns the correct action', function () {
    expect(defaultBye()).to.have.property('type', DEFAULT_BYE)
  })
})
