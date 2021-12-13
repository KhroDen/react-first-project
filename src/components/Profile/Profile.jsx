import React from "react";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

  let posts = [
    { id: 1, post: 'Hi, how are you?', likesCount: 14 },
    { id: 2, post: "It's my first post", likesCount: 21 }
  ]

  return <div>
    <ProfileInfo />
    <MyPosts posts={posts} />
  </div>
}

export default Profile;
