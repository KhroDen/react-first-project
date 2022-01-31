import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer"
import { useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";


let ProfileContainer = (props) => {

  React.useEffect(() => {

    usersAPI.getProfile(userId)
      .then(Response => {
        props.setUserProfile(Response.data);
      });
  }, []);

  let { userId } = useParams();

  return (
    <Profile {...props} profile={props.profile} />
  )
};


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
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

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})
*/


export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
