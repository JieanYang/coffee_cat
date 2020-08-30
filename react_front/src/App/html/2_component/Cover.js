import React, { Component } from 'react';
import { connect } from 'react-redux'
import { echo } from '../../../store/actions'

const Cover = props => {
  return (
    <>
      <div id="cover">
        <div class="img"></div>
        <div class="content"></div>
        <div class="curve"></div>
      </div>
    </>
  )
}

export default connect(
  null,
  null
)(Cover);