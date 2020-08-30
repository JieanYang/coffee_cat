import React from 'react'
import { connect } from 'react-redux'
import '../../style/2_component/Cover.scss'

const Cover = props => {
  return (
    <>
      <div id="component_cover">
        <div className="img">
          <div className="content flex_row flex_layout_space_around flex_align_center">
            <div>
              <div className="icons"></div>
              <div className="text">
                <h2>{props.title}</h2>
              </div>
              <div className="buttons"></div>

              
            </div>
          </div>
        </div>
        <div className="curve"></div>
      </div>
    </>
  )
}

export default connect(
  null,
  null
)(Cover);