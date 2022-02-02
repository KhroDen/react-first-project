import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer"
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


let ProfileContainer = (props) => {
  React.useEffect(() => { props.getUserProfile(userId) }, []);
  let { userId } = useParams();

  return (
    <Profile {...props} profile={props.profile} />
  )
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(connect(mapStateToProps, { getUserProfile }), withAuthRedirect)(ProfileContainer);

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