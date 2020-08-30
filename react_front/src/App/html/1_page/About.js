import React from 'react'
import { connect } from 'react-redux'
import Cover from '../2_component/Cover'

const About = props => {
  return (
    <>
      <div>
        <h1>About page</h1>
        <Cover />
      </div>
    </>
  )
}

export default connect(
  null,
  null
)(About);