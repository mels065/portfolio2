import React from 'react'

import VisibleDefault from '../../containers/VisibleDefault'

if (process.env.NODE_ENV !== 'TESTING') require('./style.scss')

const App = () => (
  <div className='App'>
    <VisibleDefault />
  </div>
)

export default App
