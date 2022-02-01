import React from "react";
import { Navigate } from "react-router-dom";
import MyPostsContainer from "./My posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  /*let posts = [
    { id: 1, post: 'Hi, how are you?', likesCount: 14 },
    { id: 2, post: "It's my first post", likesCount: 21 }
  ]*/

  return <div>
    <ProfileInfo profile={props.profile} />
    <MyPostsContainer />
  </div>
}

export default Profile;
