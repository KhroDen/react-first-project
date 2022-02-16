import React from "react";
import s from './ProfileInfo.module.css';
import { useState } from "react";
import { useEffect } from "react";


const ProfileStatus = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deActivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
		<div>
			<b>Статус:</b>
			{!editMode &&
				<div>
					<span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange}
						autoFocus={true}
						onBlur={ /*onStatusChange,*/ deActivateEditMode}
						value={status} />
				</div>
			}
		</div>
	)
}

export default ProfileStatus;
