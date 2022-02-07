import React from "react";
import s from './ProfileInfo.module.css';
import { useState } from "react";


const ProfileStatus = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	let activateEditMode = () => {
		setEditMode(true)
	}

	let deActivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	let onStatusChange = (e) => {
		let st = e.currentTarget.value;
		setStatus(st);
	}



	return (
		<div>Статус:
			{!editMode &&
				<div>
					<span onDoubleClick={activateEditMode}>{props.status}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} autoFocus={true} onBlur={onStatusChange, deActivateEditMode} value={status} />
				</div>
			}
		</div>
	)
}

export default ProfileStatus;
