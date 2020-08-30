import React from 'react'
import { connect } from 'react-redux'

const Cover = props => {
  return (
    <>
      <div id="cover">
        <div class="img">img</div>
        <div class="content">content</div>
        <div class="curve">curve</div>
      </div>
    </>
  )
}

export default connect(
  null,
  null
)(Cover);