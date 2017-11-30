import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './style.scss'

const App = () => (
  <Router>
    <div>
      <Route exact path='/'>
        <div>Hello World</div>
      </Route>
    </div>
  </Router>
)

export default App
