import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import AddMessageForm from './AddMessageForm/AddMessageForm';



const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(d => {
		return (
			<DialogItem name={d.name} key={d.id} id={d.id} />
		)
	})

	let messagesElements = state.messages.map(m => {
		return (
			<Message message={m.message} key={m.id} />
		)
	})

	let newMessageBody = state.newMessageBody;


	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>

	)
}

// const maxLength50 = maxLengthCreator(50);

// const AddMessageForm = (props) => {
// 	return (
// 		<form onSubmit={props.handleSubmit}>
// 			<div>
// 				<Field component={Textarea} validate={[required, maxLength50]} name={"newMessageBody"} placeholder={"Enter your message"} />
// 			</div>
// 			<div>
// 				<button>Send</button>
// 			</div>
// 		</form>
// 	)
// }

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);



export default Dialogs;