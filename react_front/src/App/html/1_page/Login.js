
import React, { useState } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import LoginForm from '../2_component/LoginForm';
import { login } from '../../../store/actions';

import {authErrors} from '../../../store/reducers';

const my_login = () => {
	const [userState, setUserState] = useState("no connect");

	const action_login = () => {
		return setUserState("login and connected");
	}

	const action_logout = () => {
		return setUserState("logout");
	}
}


const Login = (props) => {
	if(props.isAuthenticated) {
		return (
			<Redirect to='/' />
		)
	} else {
		return (
			<div className="login-page">
				<LoginForm {...props} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	errors: authErrors(state),
	isAuthenticated: true
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (username, password) => {
		dispatch(login(username, password))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
