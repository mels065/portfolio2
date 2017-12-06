import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import App from './components/App'
import store from './store'

if (process.env.NODE_ENV !== 'TESTING') require('./style.scss')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
