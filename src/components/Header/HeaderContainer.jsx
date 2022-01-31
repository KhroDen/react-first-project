import React from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";


const HeaderContainer = (props) => {

	React.useEffect(() => {
		authAPI.me()
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
