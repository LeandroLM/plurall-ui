import React from 'react'
import PropTypes from 'prop-types'

const FunctionButtonJS = ({ children }) => {
  return (
    <button>{children}</button>
  )
}

FunctionButtonJS.propTypes = {
  children: PropTypes.string.isRequired,
}

export default FunctionButtonJS
