import React from "react";
import s from './ProfileInfo.module.css';
import { useState } from "react";


const ProfileStatus = (props) => {

	let [editMode, setEditMode] = useState(false);

	let activateEditMode = () => {
		setEditMode(true)
	}

	let deActivateEditMode = () => {
		setEditMode(false)
	}

	return (
		<div>
			{!editMode &&
				<div>
					<span onDoubleClick={activateEditMode}>{props.status}</span>
				</div>
			}
			{editMode &&
				<div>
					<input autoFocus={true} onBlur={deActivateEditMode} value={props.status} />
				</div>
			}
		</div>
	)
}

export default ProfileStatus;
