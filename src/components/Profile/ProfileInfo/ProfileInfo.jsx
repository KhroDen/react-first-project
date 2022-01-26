import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return <div>
    <div>
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'></img>
    </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.small} />
      <div>Имя: {props.profile.fullName}</div>
      <div>О себе: {props.profile.aboutMe}</div>
      <div>Ищет работу? :  {props.profile.lookingForAJob}</div>
      <div>Серьезно ищет работу?? :  {props.profile.lookingForAJobDescription}</div>
    </div>
  </div>
}

export default ProfileInfo;
