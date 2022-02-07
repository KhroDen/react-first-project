import React from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Login"} name={"Login"} component={"input"} />
			</div>
			<div>
				<Field placeholder={"Password"} name={"Password"} component={"input"} />
			</div>
			<div>
				<Field component={"input"} name={"rememberMe"} type={"checkbox"} />remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

	const onSubmit = (FormData) => {
		console.log(FormData);
	}
	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}



export default Login;