import React from 'react'
import PropTypes from 'prop-types'

class ClassButtonJS extends React.Component {
  state = { language: 'JavaScript' }

  propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <button>{this.props.children} in {this.state.language}</button>
    )
  }
}

export default ClassButtonJS
