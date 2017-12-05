import React from 'react'
import { withRouter } from 'react-router-dom'

import { NOT_FOUND_HEADING } from '../../constants/not-found'

import './style.scss'

const NotFound = () => (
  <div className='NotFound'>
    <h2>{NOT_FOUND_HEADING}</h2>
    <p>The requested document could not be found</p>
  </div>
)

const NotFoundWithRouter = withRouter(NotFound)

export default NotFoundWithRouter
