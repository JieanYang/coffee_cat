import React, { Component } from 'react';
import { connect } from 'react-redux'
import {echo} from '../../store/actions/echo'
import {serverMessage} from '../../store/reducers'


class App extends Component {

  componentDidMount() {
      this.props.fetchMessage('Hi!')
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
  state => ({ message: serverMessage(state) }),
  { fetchMessage: echo }
)(App);