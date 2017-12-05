import React from 'react'

import { NOT_FOUND_HEADING } from '../../constants/not-found'

import './style.scss'

const NotFound = () => (
  <div className='NotFound'>
    <h2>{NOT_FOUND_HEADING}</h2>
    <p>The requested document could not be found</p>
  </div>
)

export default NotFound
