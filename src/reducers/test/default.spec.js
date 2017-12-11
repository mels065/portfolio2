import { expect } from 'chai'
import defaultReducer from '../default'
import {
  DEFAULT_HELLO,
  DEFAULT_BYE
} from '../../constants/default'

const defaultActions = {
  'INVALID': {
    type: 'INVALID_ACTION'
  },
  'HELLO': {
    type: DEFAULT_HELLO
  },
  'BYE': {
    type: DEFAULT_BYE
  }
}

describe('defaultReducer', function () {
  it('has "Hello World" as message state by default', function () {
    expect(defaultReducer(undefined, defaultActions.INVALID).message)
      .to.equal('Hello World')
  })

  it('sets message state to "Hello World" when given DEFAULT_HELLO action', function () {
    expect(defaultReducer('', defaultActions.HELLO).message)
      .to.equal('Hello World')
  })

  it('sets message state to "Bye World" when given DEFAULT_BYE action', function () {
    expect(defaultReducer('', defaultActions.BYE).message)
      .to.equal('Bye World')
  })
})
