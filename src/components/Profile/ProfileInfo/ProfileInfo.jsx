import React, { useState } from "react";
import Preloader from "../../common/preloader/Preloader";
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		saveProfile(formData).then(
			() => {
				setEditMode(false);
			}
		)
	}

	return <div>
		<div className={styles.descriptionBlock}>
			<img src={profile.photos.small || userPhoto} className={styles.mainPhoto} />
			{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
			<ProfileStatus status={status} updateStatus={updateStatus} />

			{editMode
				? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
				: <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}


		</div>
	</div>
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {

	return <div>
		{isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
		<div>
			<b>Имя:</b> {profile.fullName}
		</div>
		<div>
			<b>О себе:</b> {profile.aboutMe}
		</div>
		<div>
			<b>Ищет работу?</b> :  {profile.lookingForAJob ? "да" : "нет"}
		</div>
		{profile.lookingForAJob &&
			<div>
				<b>Серьезно ищет работу??</b> :  {profile.lookingForAJobDescription}
			</div>
		}
		<div>
			<b>Контакты:</b> : {Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
			})}
		</div>
	</div>
}

const Contact = ({ contactTitle, contactValue }) => {
	return <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
}




export default ProfileInfo;
