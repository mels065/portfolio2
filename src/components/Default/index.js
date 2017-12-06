import React from 'react'
import PropTypes from 'prop-types'

if (process.env.NODE_ENV !== 'TESTING') require('./style.scss')

const Default = props => {
  const { message, onHelloClick, onByeClick } = props

  return (
    <div className='default'>
      <h2 className='text-primary'>{message}</h2>
      <button className='btn btn-primary' onClick={
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
