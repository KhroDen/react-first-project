import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


/*let posts = [
	{ id: 1, post: 'Hi, how are you?', likesCount: 14 },
	{ id: 2, post: "It's my first post", likesCount: 21 }
]*/


const MyPosts = React.memo((props) => {

	let postsElements = props.posts.map(p => {
		return (
			<Post key={p.id} message={p.post} likesCount={p.likesCount} />
		)
	})

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<div className={s.postBlock}>
			<h3>My posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
})

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={"newPostText"} component={Textarea} validate={[required, maxLength10]} placeholder={"Write there.."} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)


export default MyPosts;
