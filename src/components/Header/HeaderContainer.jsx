import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";


const HeaderContainer = (props) => {

	React.useEffect(() => {
		usersAPI.getAuth()
			.then(data => {
				if (data.resultCode === 0) {
					let { id, email, login } = data.data;
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
