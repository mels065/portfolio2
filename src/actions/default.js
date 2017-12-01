import {
  DEFAULT_HELLO,
  DEFAULT_BYE
} from '../constants/default'

export const defaultHello = () => {
  return {
    type: DEFAULT_HELLO
  }
}

export const defaultBye = () => {
  return {
    type: DEFAULT_BYE
  }
}
