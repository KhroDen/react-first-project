import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';

const ProfileInfo = ({ profile, status, updateStatus }) => {

	if (!profile) {
		return <Preloader />
	}

	return <div>
		{/* <div>
			<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'></img>
		</div> */}
		<div className={s.descriptionBlock}>
			<img src={profile.photos.small} />
			<ProfileStatus status={status} updateStatus={updateStatus} />
			<div>Имя: {profile.fullName}</div>
			<div>О себе: {profile.aboutMe}</div>
			<div>Ищет работу? :  {profile.lookingForAJob}</div>
			<div>Серьезно ищет работу?? :  {profile.lookingForAJobDescription}</div>
		</div>
	</div>
}

export default ProfileInfo;
