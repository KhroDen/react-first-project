import React from "react";
import { Field, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import styles from "../ProfileInfo/ProfileInfo.module.css";
import style from '../../common/FormsControls/FormsControls.module.css';



const ProfileDataForm = ({ handleSubmit, profile, error }) => {

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div> Имя:
					{createField("fullName", Input, "name", null)}
				</div>
				<div> О себе:
					{createField("aboutMe", Textarea, "about me", null)}
				</div>
				<div> Нуждаюсь в работе:
					{createField("lookingForAJob", Input, null, null, { type: "checkbox" })}
				</div>
				<div> My skils:
					{createField("lookingForAJobDescription", Textarea, "my professional skils", null)}
				</div>

				<div>
					<div>Контакты:</div> {Object.keys(profile.contacts).map(key => {
						return <div key={key} className={styles.contact}>
							<div>{key}: {createField("contacts." + key, Input, key, null)}</div>
						</div>
					})}
				</div>

				<div>
					<button>save</button>
				</div>
				{
					error && <div className={style.formSummaryError}>
						{error}
					</div>
				}

			</form>
		</div>
	)
}

const ProfileDataReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataReduxForm;
