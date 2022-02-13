import React from "react";
import Preloader from "../../common/preloader/Preloader";
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return <div>
		{/* <div>
			<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'></img>
		</div> */}
		<div className={styles.descriptionBlock}>
			<img src={profile.photos.small || userPhoto} className={styles.mainPhoto} />
			{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
			<ProfileStatus status={status} updateStatus={updateStatus} />
			<div>Имя: {profile.fullName}</div>
			<div>О себе: {profile.aboutMe}</div>
			<div>Ищет работу? :  {profile.lookingForAJob}</div>
			<div>Серьезно ищет работу?? :  {profile.lookingForAJobDescription}</div>
		</div>
	</div>
}

export default ProfileInfo;
