import React from "react";
import MyPostsContainer from "./My posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

	/*let posts = [
		{ id: 1, post: 'Hi, how are you?', likesCount: 14 },
		{ id: 2, post: "It's my first post", likesCount: 21 }
	]*/

	return <div>
		<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
		<MyPostsContainer />
	</div>
}

export default Profile;
