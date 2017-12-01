import {
  DEFAULT_HELLO,
  DEFAULT_BYE
} from '../constants/default'

const defaultReducer = (state = {
  message: 'Hello World'
}, action) => {
  switch (action.type) {
    case DEFAULT_HELLO: {
      return {...state, message: 'Hello World'}
    }
    case DEFAULT_BYE: {
      return {...state, message: 'Bye World'}
    }
  }

  return state
}

export default defaultReducer
