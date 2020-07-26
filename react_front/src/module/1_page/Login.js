// src/module/1_page/Article.js

import React, { useState } from "react";

export default function Login() {
	const [userState, setUserState] = useState("no connect");

	const action_login = () => {
		return setUserState("login and connected");
	}

	const action_logout = () => {
		return setUserState("logout");
	}

	return (
		<>
			<div>
				<div>
			      <h2>Login</h2>
			    </div>
				<div>
					state: {userState}
				</div>
			    <div>
			    	<button onClick={action_login}>login</button>
			    	&nbsp;
			    	<button>noauth</button>
			    	&nbsp;
			    	<button>test</button>
			    	&nbsp;
			    	<button onClick={action_logout}>logout</button>
			    </div>
			</div>
		</>
	)
}

