import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";


const HeaderContainer = (props) => {
	React.useEffect(() => { props.getAuthUserData() }, []);
	return (
		<Header {...props} />
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
