import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";


const HeaderContainer = (props) => {

	React.useEffect(() => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true, headers: { "API-KEY": "c60f88e0-b218-470c-b419-16feb783b904" } })
			.then(Response => {

				if (Response.data.resultCode === 0) {
					let { id, email, login } = Response.data.data;
					props.setAuthUserData(id, email, login);
				}

			});
	}, []);

	return (
		<Header {...props} />
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
