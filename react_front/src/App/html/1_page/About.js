import React, { Component } from 'react';
import { connect } from 'react-redux'
import { echo } from '../../../store/actions'

const About = props => {
  return (
    <>
      <div>
        <h1>About page</h1>
      </div>
    </>
  )
}

export default connect(
  null,
  null
)(About);