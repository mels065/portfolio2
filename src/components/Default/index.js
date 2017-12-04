import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Default = props => {
  const { message, onHelloClick, onByeClick } = props

  return (
    <div className='default'>
      <h2>{message}</h2>
      <button onClick={
        message === 'Hello World'
          ? onByeClick
          : onHelloClick
      }>Change Message</button>
    </div>
  )
}

export default Default

Default.propTypes = {
  message: PropTypes.string.isRequired,
  onHelloClick: PropTypes.func.isRequired,
  onByeClick: PropTypes.func.isRequired
}
