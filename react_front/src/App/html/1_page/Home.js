import React, { Component } from 'react'
import { connect } from 'react-redux'
import { echo } from '../../../store/actions'
import Cover from '../2_component/Cover'


class App extends Component {

  componentDidMount() {
      // this.props.fetchMessage('Hi, yang!')
  }
  
  render() {
    return (
      <div>
        <div>
          <Cover title="Home" />
        </div>
        <div>
          <p>content</p>
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ message: state.echo.message }),
  { fetchMessage: echo }
)(App);