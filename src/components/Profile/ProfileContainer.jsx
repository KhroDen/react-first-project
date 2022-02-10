import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer"
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";


let ProfileContainer = (props) => {

	React.useEffect(() => { props.getUserProfile(userId) }, []);
	let { userId } = useParams();
	props.getStatus(userId);

	if (!userId) {
		userId = props.authorizedUserId;
	}

	return (
		<Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
	)
};


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
});

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }))
	(ProfileContainer);

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

/*class ProfileContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(Response => {
				this.props.setUserProfile(Response.data);
			});
	}
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}
*/

//export default connect(mapStateToProps, { getUserProfile })(AuthRedirectComponent);