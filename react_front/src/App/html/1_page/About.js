import React from 'react'
import { connect } from 'react-redux'
import Cover from '../2_component/Cover'

const About = props => {
  return (
    <>
      <div>
        <Cover title="About" />
      </div>
      <p>content</p>
    </>
  )
}

export default connect(
  null,
  null
)(About);