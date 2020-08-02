import React, { Component } from 'react';
import { connect } from 'react-redux'
import { echo } from '../../../store/actions/echo'


class App extends Component {

  componentDidMount() {
      this.props.fetchMessage('Hi, yang!')
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to React</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default connect(
  state => ({ message: state.echo.message }),
  { fetchMessage: echo }
)(App);