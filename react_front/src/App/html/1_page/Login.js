
import React, { useState } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import LoginForm from '../2_component/LoginForm';
import {login} from '../../../store/actions';

import {authErrors, isAuthenticated} from '../../../store/reducers';

const my_login = () => {
	const [userState, setUserState] = useState("no connect");

	const action_login = () => {
		return setUserState("login and connected");
	}

	const action_logout = () => {
		return setUserState("logout");
	}
}



// return (
// 	<>
// 		<div>
// 			<div>
// 		      <h2>Login</h2>
// 		    </div>
// 			<div>
// 				state: {userState}
// 			</div>
// 		    <div>
// 		    	<button onClick={action_login}>login</button>
// 		    	&nbsp;
// 		    	<button>noauth</button>
// 		    	&nbsp;
// 		    	<button>test</button>
// 		    	&nbsp;
// 		    	<button onClick={action_logout}>logout</button>
// 		    </div>
// 		    <div>
// 		    	<LoginForm />
// 		    </div>
// 		</div>
// 	</>
// )



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
	isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (username, password) => {
		dispatch(login(username, password))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
