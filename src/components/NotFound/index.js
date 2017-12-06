import React from 'react'

import { NOT_FOUND_HEADING } from '../../constants/not-found'

if (process.env.NODE_ENV !== 'TESTING') require('./style.scss')

const NotFound = () => (
  <div className='NotFound'>
    <h2 className='text-danger NotFound-heading'>{NOT_FOUND_HEADING}</h2>
    <p>The requested document could not be found</p>
  </div>
)

export default NotFound
