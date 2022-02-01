import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer"
import { Navigate, useParams } from "react-router-dom";


let ProfileContainer = (props) => {
  React.useEffect(() => { props.getUserProfile(userId) }, []);
  let { userId } = useParams();

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <Profile {...props} profile={props.profile} />
  )
};


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
})



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



export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
