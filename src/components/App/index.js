import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import VisibleDefault from '../../containers/VisibleDefault'

import './style.scss'

const App = () => (
  <Router>
    <div>
      <Route exact path='/'>
        <VisibleDefault />
      </Route>
    </div>
  </Router>
)

export default App
