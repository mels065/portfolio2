import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import VisibleDefault from '../../containers/VisibleDefault'
import NotFound from '../modules/NotFound'

import Main from '../layouts/Main';

import './style.scss'

const App = () => (
  <div className='App'>
    <Router>
      <Main>
        <Switch>
          <Route exact path='/' component={VisibleDefault} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </Router>
  </div>
)

export default App
