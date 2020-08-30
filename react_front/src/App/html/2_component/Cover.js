import React from 'react'
import { connect } from 'react-redux'
import '../../style/2_component/Cover.scss'

const Cover = props => {
  return (
    <>
      <div id="component_cover">
        <div class="img"></div>
        <div class="content">
          <h1>{props.title}</h1>
        </div>
        <div class="curve">curve</div>
      </div>
    </>
  )
}

export default connect(
  null,
  null
)(Cover);